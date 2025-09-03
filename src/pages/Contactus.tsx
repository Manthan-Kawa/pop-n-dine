// src/pages/Contactus.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Utensils } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
}

const Contactus: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{ 
    success: boolean; 
    message: string 
  } | null>(null);

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  // Check network status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Email validation
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., user@example.com)';
      isValid = false;
    }

    // Phone validation (exactly 10 digits)
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Message validation
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOnline) {
      setSubmitStatus({ 
        success: false, 
        message: 'You are offline. Please connect to the internet.' 
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, 'Contact'), {
        name: formData.name.trim() || 'Not provided',
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim() || 'No subject',
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        status: 'new',
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });

      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! We will respond soon.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Firestore error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? 
          `Submission failed: ${error.message}` : 
          'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to ensure only digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col px-4" 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-6 pt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-6 flex-1 flex flex-col mb-9"
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        >
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-4 rounded-xl ${
                submitStatus.success 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Your Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all h-11 px-4 hover:shadow-md hover:scale-105 focus:scale-105"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Email Address</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all h-11 px-4 hover:shadow-md hover:scale-105 focus:scale-105`}
                  placeholder="your@example.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">Phone Number</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  maxLength={10}
                  className={`block w-full rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all h-11 px-4 hover:shadow-md hover:scale-105 focus:scale-105`}
                  placeholder="1234567890"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="relative">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-sm font-medium">Subject</span>
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all h-11 px-4 hover:shadow-md hover:scale-105 focus:scale-105"
                  placeholder="Regarding..."
                />
              </div>
            </div>

            <div className="mt-4 col-span-2">
              <div className="flex items-center space-x-2 text-gray-700 mb-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">Your Message</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`block w-full rounded-xl border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:border-gray-900 focus:ring-gray-900 transition-all p-4 hover:shadow-md hover:scale-[1.02] focus:scale-[1.02] h-32 resize-none`}
                placeholder="Enter your message here (minimum 10 characters)..."
                required
                minLength={10}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
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
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Contactus;