import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Minus, Plus, X, MapPin, Home, Briefcase, Check } from 'lucide-react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from "firebase/firestore";
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import PaymentPhoto from "../pages/Images/1.png";
import CodLogo from '../pages/Images/cod2.png';

import { toPng } from 'html-to-image';

interface CartItem {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    hasPortions?: boolean;
  };
  quantity: number;
  isHalf: boolean;
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  portion: 'half' | 'full';
  price: number;
  image: string;
}

interface OrderData {
  customerDetails: {
    name: string;
    email: string;
    address: string;
    addressId?: string;
  };
  items: OrderItem[];
  subtotal: number;
  cgst: number;
  sgst: number;
  total: number;
  paymentMethod: 'online' | 'cod';
  paymentId?: string;
  createdAt: any;
  updatedAt: any;
}

interface Address {
  id: string;
  type: 'home' | 'work';
  distance?: string;
  fullAddress: string;
  details: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, updateQuantity, removeItem, updatePortionSize, clearCart, refreshTrigger } = useCartStore();
  const [showOrderPage, setShowOrderPage] = React.useState(false);
  const [notification, setNotification] = React.useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<any>(null);
  const [savedAddresses, setSavedAddresses] = React.useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = React.useState<string | null>(null);
  const [showAddressModal, setShowAddressModal] = React.useState(false);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [paymentDetails, setPaymentDetails] = React.useState<any>(null);
  const [isCodOrder, setIsCodOrder] = React.useState(false);


  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchAddresses(user.email || '');
      } else {
        setCurrentUser(null);
        setSavedAddresses([]);
      }
    });
    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    if (currentUser?.email) {
      fetchAddresses(currentUser.email);
    }
  }, [refreshTrigger]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (notification.show) {
      timer = setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [notification]);

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
  
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const fetchAddresses = async (userEmail: string) => {
    try {
      const q = query(collection(db, "AD"), where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      const addressesData: Address[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        addressesData.push({
          id: doc.id,
          type: data.type as 'home' | 'work',
          distance: data.distance,
          fullAddress: data.fullAddress,
          details: data.details,
          email: data.email,
          coordinates: data.coordinates
        });
      });
      
      setSavedAddresses(addressesData);
      if (addressesData.length > 0 && !selectedAddressId) {
        setSelectedAddressId(addressesData[0].id);
      }
    } catch (error) {
      console.error("Error fetching addresses: ", error);
      setNotification({
        show: true,
        message: 'Failed to load saved addresses'
      });
    }
  };

  const subtotal = items.reduce((sum, item) => {
    const price = item.isHalf ? item.item.price * 0.5 : item.item.price;
    return sum + price * item.quantity;
  }, 0);

  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;
  const codCharge = 50;
  const total = subtotal + cgst + sgst;

  const handleUpdateQuantity = (itemId: number, quantity: number, isHalf: boolean) => {
    if (quantity === 0) {
      const itemToRemove = items.find(item => item.item.id === itemId && item.isHalf === isHalf);
      if (itemToRemove) {
        removeItem(itemId, isHalf);
        setNotification({
          show: true,
          message: `${itemToRemove.isHalf ? 'Half' : 'Full'} ${itemToRemove.item.name} removed from your cart`
        });
      }
    } else {
      updateQuantity(itemId, quantity, isHalf);
    }
  };

  const handlePortionSwitch = (itemId: number, currentIsHalf: boolean) => {
    updatePortionSize(itemId, currentIsHalf, !currentIsHalf);
  };

  const initiateRazorpayPayment = async (orderData: OrderData) => {
    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        setNotification({
          show: true,
          message: 'Failed to load payment gateway. Please try again.'
        });
        return;
      }

      const options = {
        key: 'rzp_test_AoVflaIGVXKnsW',
        amount: Math.round(orderData.total * 100),
        currency: 'INR',
        name: 'Pop-N-Dine',
        description: 'Food Order Payment',
        image: PaymentPhoto,
        handler: async function (response: any) {
          const completedOrder = {
            ...orderData,
            paymentId: response.razorpay_payment_id,
            paymentMethod: 'online'
          };

          await addDoc(collection(db, "Order"), completedOrder);
          setPaymentDetails({
            id: response.razorpay_payment_id,
            amount: orderData.total,
            currency: 'INR',
            status: 'captured'
          });
          setShowConfirmation(true);
        },
        prefill: {
          name: orderData.customerDetails.name,
          email: orderData.customerDetails.email
        },
        notes: {
          address: orderData.customerDetails.address
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function () {
        setNotification({
          show: true,
          message: 'Payment failed. Please try again.'
        });
      });
    } catch (error) {
      console.error("Payment error: ", error);
      setNotification({
        show: true,
        message: 'Payment failed. Please try again.'
      });
    }
  };

  const initiateCodPayment = async (orderData: OrderData) => {
    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded) {
        setNotification({
          show: true,
          message: 'Failed to load payment gateway. Please try again.'
        });
        return;
      }

      const options = {
        key: 'rzp_test_AoVflaIGVXKnsW',
        amount: codCharge * 100, // 50rs in paise
        currency: 'INR',
        name: 'Pop-N-Dine',
        description: 'COD Advance Payment',
        image: PaymentPhoto,
        handler: async function (response: any) {
          await addDoc(collection(db, "Order"), orderData);
          setIsCodOrder(true); // explicitly mark it as a COD order
          setPaymentDetails(null); // optionally, just keep this null
          setShowConfirmation(true);
          setShowOrderPage(false);
        },
        prefill: {
          name: orderData.customerDetails.name,
          email: orderData.customerDetails.email
        },
        notes: {
          address: orderData.customerDetails.address
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function () {
        setNotification({
          show: true,
          message: 'COD payment failed. Please try again.'
        });
      });
    } catch (error) {
      console.error("Payment error: ", error);
      setNotification({
        show: true,
        message: 'Payment failed. Please try again.'
      });
    }
  };

  const handleOrderSubmit = async (deliveryDetails: {
    address: string;
  }, paymentMethod: 'online' | 'cod') => {
    setIsSubmitting(true);
    try {
      const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);
      
      const orderData: OrderData = {
        customerDetails: {
          name: currentUser?.displayName || 'Customer',
          email: currentUser?.email || '',
          address: selectedAddress ? `${selectedAddress.fullAddress}, ${selectedAddress.details}` : deliveryDetails.address,
          addressId: selectedAddress?.id
        },
        items: items.map(item => ({
          id: item.item.id,
          name: item.item.name,
          quantity: item.quantity,
          portion: item.isHalf ? 'half' : 'full',
          price: item.isHalf ? item.item.price * 0.5 : item.item.price,
          image: item.item.image
        })),
        subtotal: subtotal,
        cgst: cgst,
        sgst: sgst,
        total: paymentMethod === 'cod' ? total - codCharge : total,
        paymentMethod: paymentMethod,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      if (paymentMethod === 'online') {
        await initiateRazorpayPayment(orderData);
      } else {
        await initiateCodPayment(orderData);
      }
    } catch (error) {
      console.error("Error adding order: ", error);
      setNotification({
        show: true,
        message: 'Failed to place order. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ConfirmationPopup = () => {
    const popupRef = React.useRef<HTMLDivElement>(null);
    const downloadBtnRef = React.useRef<HTMLButtonElement>(null);
  
    const handleDone = () => {
      setShowConfirmation(false);
      clearCart();
      window.location.reload();
    };

    const isCod = isCodOrder;
    const finalTotal = isCod ? total - codCharge : total;
  
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
  className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl relative overflow-y-auto max-h-[90vh] p-6 sm:p-8 md:p-6 lg:p-8 print:bg-white print:max-h-none print:overflow-visible"
  onClick={(e: React.MouseEvent) => e.stopPropagation()}
>

          
          <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="flex flex-col items-center justify-center mb-6"
>
  {isCod ? (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="pt-2"
    >
      <img
        src={CodLogo}
        alt="COD"
        className="h-[84px] w-[84px] object-contain"
      />
    </motion.div>
  ) : (
    <div className="p-3 bg-green-500 rounded-full mb-3">
      <Check className="h-8 w-8 text-white" strokeWidth={3} />
    </div>
  )}

  <h2 className="text-2xl font-semibold text-gray-900 text-center">
    {isCod ? 'Order Placed!' : 'Order Confirmed!'}
  </h2>
</motion.div>





          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">₹{finalTotal.toFixed(2)}</h3>
              <p className="text-md text-black-500">{isCod ? 'Amount to be Paid' : 'Payment Amount'}</p>
            </div>

            <div className="space-y-1 border-t pt-4 text-lg text-black-700">
              {items.map((item) => (
                <div key={`${item.item.id}-${item.isHalf}`} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.item.image}
                      alt={item.item.name}
                      className="w-10 h-10 rounded mr-2 object-cover"
                    />
                    <span className="text-sm text-black-600">
                      {item.quantity}x {item.item.name} ({item.isHalf ? 'Half' : 'Full'})
                    </span>
                  </div>
                  <span className="text-base font-medium pl-2 pr-2 text-black-800">
                    ₹{((item.isHalf ? item.item.price * 0.5 : item.item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-1 border-t pt-3 pl-2 pr-2">
              <div className="flex justify-between text-base font-large text-black-800s">
                <span>Subtotal</span>
                <span className="flex justify-between text-base font-medium text-black-800">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-large text-black-800">
                <span>CGST (9%)</span>
                <span className="flex justify-between text-base font-medium text-black-800">₹{cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-large text-black-800">
                <span>SGST (9%)</span>
                <span className="flex justify-between text-base font-medium text-black-800">₹{sgst.toFixed(2)}</span>
              </div>
              </div>
              {isCod && (
                <div className="flex justify-between text-base font-large text-black-800 pt-3 pl-2 pr-2 border-t">
                         <span>COD Charges</span>
                 <span className="flex justify-between text-base font-medium text-black-800">- ₹{codCharge.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-semibold  pl-2 pr-2 text-black pt-2 border-t">
                <span>Total</span>
                <span className="flex justify-between text-base font-medium text-black-800">₹{Math.round(finalTotal)}
                </span>
              </div>
            
            
            {!isCod && (
              <div className="pt-4 border-t text-center">
                <p className="text-sm font-medium text-black-700">Payment ID:</p>
                <p className="text-sm text-gray-600 break-all">{paymentDetails?.id || 'N/A'}</p>
              </div>
            )}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-semibold text-center text-black-600 mt-6 mb-6"
          >
            {isCod ? 'Your order will be Delivered Soon' : 'Your order is on its way!'}<br/>
            Save this and show to Delivery Partner!
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

  const OrderPage = () => {
    const [deliveryDetails, setDeliveryDetails] = React.useState({
      address: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setDeliveryDetails(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const validateForm = () => {
      if (currentUser && savedAddresses.length > 0 && !selectedAddressId) {
        setNotification({
          show: true,
          message: 'Please select a delivery address'
        });
        return false;
      }

      if (!currentUser && !deliveryDetails.address) {
        setNotification({
          show: true,
          message: 'Please enter a delivery address'
        });
        return false;
      }

      return true;
    };

    return (
      <div className="h-full flex flex-col bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Place Your Order</h2>
          <button 
            onClick={() => setShowOrderPage(false)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={isSubmitting}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Delivery Details</h3>
              
              {currentUser && savedAddresses.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Saved Addresses</h4>
                  <div className="space-y-2">
                    {savedAddresses.map((address) => (
                      <div 
                        key={address.id}
                        className={`p-3 border rounded-lg cursor-pointer ${selectedAddressId === address.id ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                        onClick={() => setSelectedAddressId(address.id)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                            {address.type === 'home' ? (
                              <Home className="w-4 h-4 text-gray-600" />
                            ) : (
                              <Briefcase className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium capitalize">{address.type}</p>
                            <p className="text-xs text-gray-500">{address.distance}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">{address.fullAddress}</p>
                        <p className="text-sm">{address.details}</p>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowAddressModal(true)}
                    className="text-sm text-red-500 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add new address
                  </button>
                </div>
              )}

              {(!currentUser || savedAddresses.length === 0) && (
                <div className="space-y-3">
                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    value={deliveryDetails.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={`${item.item.id}-${item.isHalf}`} className="flex justify-between text-sm">
                    <span>
                      {item.quantity}x {item.item.name} ({item.isHalf ? 'Half' : 'Full'})
                    </span>
                    <span>₹{((item.isHalf ? item.item.price * 0.5 : item.item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">CGST (9%)</span>
                <span>₹{cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SGST (9%)</span>
                <span>₹{sgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-3">
            <button
              className="flex-1 bg-green-600 text-white py-3 rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={async () => {
                if (!validateForm()) return;
                await handleOrderSubmit(deliveryDetails, 'online');
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Pay Online'}
            </button>
            <button
              className="flex-1 bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={async () => {
                if (!validateForm()) return;
                await handleOrderSubmit(deliveryDetails, 'cod');
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Cash on Delivery'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AddressModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New Address</h2>
          <button 
            onClick={() => setShowAddressModal(false)} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            To use saved addresses, please add them from your profile page.
          </p>
          <button
            onClick={() => {
              setShowAddressModal(false);
              window.location.href = '/addresses';
            }}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Go to Address Book
          </button>
        </div>
      </div>
    </div>
  );

  if (items.length === 0) {
    return (
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[30rem] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[30rem] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {showOrderPage ? (
          <OrderPage />
        ) : (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {items.map((cartItem) => (
                  <div
                    key={`${cartItem.item.id}-${cartItem.isHalf}`}
                    className="flex items-center space-x-4 py-4 border-b"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold truncate">
                        {cartItem.item.name}
                        {cartItem.item.hasPortions && (
                          <span className="text-sm font-normal text-gray-600 ml-1">
                            ({cartItem.isHalf ? 'Half' : 'Full'})
                          </span>
                        )}
                      </h3>
                      {cartItem.item.hasPortions && (
                        <button
                          onClick={() => handlePortionSwitch(cartItem.item.id, cartItem.isHalf)}
                          className="text-sm text-gray-600 underline mt-1"
                        >
                          Switch to {cartItem.isHalf ? 'Full' : 'Half'}
                        </button>
                      )}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => handleUpdateQuantity(cartItem.item.id, cartItem.quantity - 1, cartItem.isHalf)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{cartItem.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(cartItem.item.id, cartItem.quantity + 1, cartItem.isHalf)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        ₹{((cartItem.isHalf ? cartItem.item.price * 0.5 : cartItem.item.price) * cartItem.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">CGST (9%)</span>
                  <span>₹{cgst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">SGST (9%)</span>
                  <span>₹{sgst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => setShowOrderPage(true)}
                className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>

      {notification.show && (
        <div className="fixed top-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 notification">
          <span className="font-medium">{notification.message}</span>
          <button 
            onClick={() => setNotification({ show: false, message: '' })} 
            className="text-white hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {showAddressModal && <AddressModal />}

      <AnimatePresence>
        {showConfirmation && <ConfirmationPopup />}
      </AnimatePresence>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .notification {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}