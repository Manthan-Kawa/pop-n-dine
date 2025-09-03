import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Mail, Phone, Utensils, MessageSquare, X, Check } from 'lucide-react';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toPng } from 'html-to-image';
import Barcode from 'react-barcode';

import PaymentPhoto from "../pages/Images/1.png";

interface FormData {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  specialRequest: string;
}

interface PaymentDetails {
  id: string;
  amount: number;
  currency: string;
  status: string;
  method: string;
  order_id: string;
  description: string;
  receipt: string;
  created_at: number;
  upi?: {
    vpa: string;
  };
  bank?: string;
  card?: {
    last4: string;
  };
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const Reserve: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

  const [dateError, setDateError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  useEffect(() => {
    if (user?.email) {
      setFormData(prev => ({
        ...prev,
        email: user.email || '',
        name: user.displayName || prev.name
      }));
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [user]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setDateError('Please select a future date');
      setFormData({ ...formData, date: '' });
    } else {
      setDateError('');
      setFormData({ ...formData, date: e.target.value });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
  
    if (/^\+?\d*$/.test(value) || value === '') {
      if (value.startsWith('+91') && value.length > 13) return;
  
      if (!value.startsWith('+91') && value !== '') {
        value = `+91${value}`;
      }
  
      setFormData({ ...formData, phone: value });
    }
  };

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    if (!user) {
      setSubmitStatus({
        success: false,
        message: 'Please sign in to make a reservation'
      });
      return false;
    }
    
    if (!formData.date || !formData.time || !formData.name || !formData.email || !formData.phone) {
      setSubmitStatus({
        success: false,
        message: 'Please fill all required fields'
      });
      return false;
    }
    
    if (dateError) {
      setSubmitStatus({
        success: false,
        message: dateError
      });
      return false;
    }
    
    if (!acceptedTerms) {
      setSubmitStatus({
        success: false,
        message: 'Please accept the terms and conditions'
      });
      return false;
    }

    if (!formData.phone.match(/^\+91\d{10}$/)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid 10-digit Indian phone number with +91 prefix'
      });
      return false;
    }

    return true;
  };

  const initiatePayment = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const options = {
      key: 'rzp_test_AoVflaIGVXKnsW',
      amount: '25000',
      currency: 'INR',
      name: 'Pop-N-Dine',
      description: 'Table Reservation Fee',
      image: PaymentPhoto,
      order_id: '',
      handler: async (response: any) => {
        const paymentDetails: PaymentDetails = {
          id: response.razorpay_payment_id,
          amount: 25000,
          currency: 'INR',
          status: 'captured',
          method: response.method || 'card',
          order_id: response.razorpay_order_id,
          description: 'Table Reservation',
          receipt: response.razorpay_payment_id,
          created_at: Date.now(),
          ...(response.method === 'upi' && { upi: { vpa: response.vpa } }),
          ...(response.method === 'netbanking' && { bank: response.bank }),
          ...(response.method === 'card' && { card: { last4: response.card.last4 } })
        };

        setPaymentDetails(paymentDetails);
        setPaymentSuccess(true);
        setShowConfirmation(true);
        await submitReservation(paymentDetails);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        reservation_date: formData.date,
        reservation_time: formData.time,
        guests: formData.guests
      },
      theme: {
        color: '#000000'
      }
    };

    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        setSubmitStatus({
          success: false,
          message: `Payment failed: ${response.error.description}`
        });
      });
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to initiate payment. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitReservation = async (paymentDetails: PaymentDetails) => {
    try {
      const reservationData = {
        ...formData,
        guests: parseInt(formData.guests),
        userId: user?.uid,
        userEmail: user?.email,
        createdAt: serverTimestamp(),
        status: 'upcoming',
        payment: {
          id: paymentDetails.id,
          amount: 250,
          currency: paymentDetails.currency,
          method: paymentDetails.method,
          status: 'completed',
          timestamp: new Date(paymentDetails.created_at),
          screenshot: screenshot || '',
          details: {
            ...(paymentDetails.upi && { upi: paymentDetails.upi.vpa }),
            ...(paymentDetails.bank && { bank: paymentDetails.bank }),
            ...(paymentDetails.card && { card_last4: paymentDetails.card.last4 })
          }
        }
      };

      await addDoc(collection(db, "Reserve"), reservationData);

      setSubmitStatus({
        success: true,
        message: 'Reservation and payment completed successfully!'
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setSubmitStatus({
        success: false,
        message: 'Reservation created but payment verification failed. Please contact support.'
      });
    }
  };

  const TermsModal: React.FC = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={() => setShowTerms(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
          <button
            onClick={() => setShowTerms(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose prose-gray">
          <h3>1. Reservation Policy</h3>
          <p>By making a reservation, you agree to arrive within 15 minutes of your scheduled time. Late arrivals may result in forfeiture of the reservation.</p>
          
          <h3>2. Cancellation Policy</h3>
          <p>Cancellations must be made at least 24 hours before the reservation time. Late cancellations may incur a fee.</p>
          
          <h3>3. Deposit and Payment</h3>
          <p>A non-refundable deposit of ₹250 is required to secure your reservation.</p>
          
          <h3>4. Group Size</h3>
          <p>Please ensure your group size matches the reservation. Significant changes may require a new reservation.</p>
          
          <h3>5. Special Requests</h3>
          <p>While we will try to accommodate special requests, they cannot be guaranteed and are subject to availability.</p>
          
          <h3>6. Privacy Policy</h3>
          <p>Your personal information will be handled in accordance with our privacy policy and used only for reservation-related communications.</p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowTerms(false)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  const ConfirmationPopup: React.FC = () => {
    const popupRef = React.useRef<HTMLDivElement>(null);
    const downloadBtnRef = React.useRef<HTMLButtonElement>(null);
  
    const handleDownload = async () => {
      if (!popupRef.current || !downloadBtnRef.current) return;
    
      try {
        downloadBtnRef.current.style.display = 'none';
    
        const dataUrl = await toPng(popupRef.current, {
          backgroundColor: 'white',
          pixelRatio: 3,
          quality: 1,
          filter: (node) => {
            return !node.classList?.contains('fixed');
          }
        });
    
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          const cropLeft = 50;
          const extraRightMargin = 50;
          const extraTopMargin = 30;
          const extraBottomMargin = 30;
    
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
    
          canvas.width = img.width - cropLeft + extraRightMargin;
          canvas.height = img.height + extraTopMargin + extraBottomMargin;
    
          if (ctx) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            ctx.drawImage(
              img,
              cropLeft, 0,
              img.width - cropLeft, img.height,
              0, extraTopMargin,
              img.width - cropLeft, img.height
            );
    
            const finalDataUrl = canvas.toDataURL('image/png');
    
            const link = document.createElement('a');
            link.download = `Pop-N-Dine-Reservation-${paymentDetails?.id || Date.now()}.png`;
            link.href = finalDataUrl;
            link.click();
          }
        };
      } catch (error) {
        console.error('Error generating image:', error);
      } finally {
        if (downloadBtnRef.current) {
          downloadBtnRef.current.style.display = '';
        }
      }
    };
    
    const handleDone = () => {
      setShowConfirmation(false);
      window.location.reload();
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          ref={popupRef}
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl relative"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <motion.button
            ref={downloadBtnRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Download confirmation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-500 p-3 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-white" strokeWidth={3} />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-center text-gray-900 mb-6"
          >
            Reservation Confirmed!
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">₹250</h3>
              <p className="text-sm text-gray-500">Payment Amount</p>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700">Payment ID:</p>
              <p className="text-sm text-gray-600 break-all">{paymentDetails?.id || 'pay_QOWmX93gsOjAEw'}</p>
              <div className="flex justify-center mt-2">
                <Barcode
                  value={paymentDetails?.id || 'pay_QOWmX93gsOjAEw'}
                  width={1.2}
                  height={50}
                  margin={15}
                  displayValue={false}
                  background="transparent"
                  lineColor="#000000"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-semibold text-center text-black-600 mt-1 mb-6"
          >
            Please Save this and show near the counter!
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <button
              onClick={handleDone}
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <motion.div className="max-w-4xl mx-auto flex flex-col px-4" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-6 pt-10">
          <motion.div className="flex justify-center mb-4" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}>
            <div className="bg-gray-900 p-3 rounded-xl">
              <Utensils className="h-10 w-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Reserve Your Table</h1>
        </div>

        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-6 flex-1 flex flex-col mb-10"
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        >
          <form onSubmit={(e) => { e.preventDefault(); initiatePayment(); }} className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {[{
                icon: Calendar, label: "Date", type: "date", value: formData.date, handler: handleDateChange,
                min: new Date().toISOString().split('T')[0]
              }, {
                icon: Clock, label: "Time", type: "time", value: formData.time, 
                handler: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, time: e.target.value })
              }, {
                icon: Users, label: "Number of Guests", type: "number", value: formData.guests, 
                handler: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, guests: e.target.value }),
                min: "1"
              }, {
                icon: User, label: "Name", type: "text", value: formData.name, 
                handler: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })
              }, {
                icon: Mail, label: "Email", type: "email", value: formData.email, 
                handler: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value }),
                disabled: !!user?.email
              }, {
                icon: Phone, label: "Phone Number", type: "tel", value: formData.phone, 
                handler: handlePhoneChange,
                pattern: "^\\+91\\d{10}$",
                title: "Please enter a valid 10-digit Indian phone number with +91 prefix"
              }].map(({ icon: Icon, label, type, value, handler, ...props }, index) => (
                <motion.div key={index} className="relative" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}>
                  <div className="flex items-center space-x-2 text-gray-700 mb-2">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                  <input
                    type={type}
                    value={value}
                    onChange={handler}
                    className="block w-full rounded-xl border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all h-11 px-4 hover:shadow-md hover:scale-105 focus:scale-105 disabled:bg-gray-100"
                    required
                    {...props}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-4 col-span-2"
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
            >
              <div className="flex items-center space-x-2 text-gray-700 mb-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">Special Requests</span>
              </div>
              <textarea
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                className="block w-full rounded-xl border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all p-4 hover:shadow-md hover:scale-[1.02] focus:scale-[1.02] h-24 resize-none"
                placeholder="Any dietary requirements or special requests?"
              />
            </motion.div>

            {dateError && (
              <motion.div 
                className="mt-2 text-red-500 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {dateError}
              </motion.div>
            )}

            <motion.div 
              className="mt-6 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-gray-900 underline font-medium hover:text-gray-700"
                >
                  terms and conditions
                </button>
              </label>
            </motion.div>

            {submitStatus && !submitStatus.success && (
              <motion.div
                className={`mt-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.div className="mt-6" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <button
                type="submit"
                disabled={isSubmitting || !acceptedTerms || !user}
                className="w-full bg-gray-900 text-white py-3 px-8 rounded-xl hover:bg-gray-800 transform hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg font-medium h-12"
              >
                {isSubmitting ? (
                  <motion.div 
                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                ) : (
                  <>
                    <Utensils className="h-5 w-5" />
                    <span>Confirm Reservation</span>
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showTerms && <TermsModal />}
        {showConfirmation && <ConfirmationPopup />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Reserve;