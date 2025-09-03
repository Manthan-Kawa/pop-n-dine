import React, { useState, useEffect } from 'react';
import { Search, IndianRupee, Calendar, Clock, ChevronDown, CreditCard, Wallet } from 'lucide-react';
import { db, auth } from '../firebaseConfig';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  type: 'veg' | 'non-veg';
  image: string;
}

interface Order {
  id: string;
  date: string;
  time: string;
  items: OrderItem[];
  subtotal: number;
  cgst: number;
  sgst: number;
  total: number;
  paymentMethod: 'online' | 'cod';
  paymentId?: string;
  customerDetails: {
    email: string;
    name: string;
    phone: string;
    address: string;
  };
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'under-500' | '500-1000' | 'above-1000'>('all');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [collectionName, setCollectionName] = useState<'Order' | 'orders'>('Order');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('User authenticated:', user.email);
        setCurrentUser(user);
        try {
          await fetchOrders(user.email || '');
        } catch (err) {
          console.error('Fetch error:', err);
          setError('Failed to load orders. Please refresh the page.');
        }
      } else {
        console.log('No user signed in');
        setCurrentUser(null);
        setOrders([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchOrders = async (userEmail: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Attempting to fetch orders from collection: ${collectionName}`);

      const ordersRef = collection(db, collectionName);
      const q = query(
        ordersRef,
        where("customerDetails.email", "==", userEmail),
        orderBy("createdAt", "desc")
      );
      
      const querySnapshot = await getDocs(q);
      console.log(`Found ${querySnapshot.size} orders in ${collectionName}`);

      if (querySnapshot.size === 0 && collectionName === 'Order') {
        console.log('Trying "orders" collection instead');
        setCollectionName('orders');
        return;
      }

      const ordersData: Order[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('Raw order data:', data);
        
        const orderDate = data.createdAt?.toDate() || 
                         data.date?.toDate() || 
                         data.orderDate?.toDate() || 
                         new Date();

        ordersData.push({
          id: doc.id,
          date: orderDate.toISOString(),
          time: orderDate.toLocaleTimeString(),
          items: data.items?.map((item: any) => ({
            id: item.id || Math.random().toString(36).substring(2, 9),
            name: item.name || 'Unnamed Item',
            quantity: item.quantity || 1,
            price: item.price || 0,
            type: item.type || 'veg',
            image: item.image || '/placeholder-food.jpg'
          })) || [],
          subtotal: data.subtotal || 0,
          cgst: data.cgst || 0,
          sgst: data.sgst || 0,
          total: data.total || 0,
          paymentMethod: data.paymentMethod || 'cod',
          paymentId: data.paymentId || '',
          customerDetails: {
            email: data.customerDetails?.email || userEmail,
            name: data.customerDetails?.name || 'Customer',
            phone: data.customerDetails?.phone || '',
            address: data.customerDetails?.address || ''
          }
        });
      });
      
      setOrders(ordersData);
      
      if (ordersData.length === 0) {
        setError('No orders found. Your order history is empty.');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError(`Failed to load orders: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = searchTerm === '' || 
        order.items.some(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesPrice = (() => {
        switch (priceRange) {
          case 'under-500': return order.total < 500;
          case '500-1000': return order.total >= 500 && order.total <= 1000;
          case 'above-1000': return order.total > 1000;
          default: return true;
        }
      })();
      
      return matchesSearch && matchesPrice;
    });

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 flex justify-center items-center h-64">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-1 border-b-2 border-black mr-4"></div>
          <span>Fetching your Orders...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Please sign in to view your orders</h2>
        <p className="text-gray-600">You need to be signed in to access your order history.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 pt-8 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center mb-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">My Orders</h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
          <button 
            onClick={() => currentUser?.email && fetchOrders(currentUser.email)}
            className="ml-4 text-blue-600 hover:text-blue-800"
          >
            Try Again
          </button>
        </div>
      )}

      <div className="flex flex-row items-center gap-2 mb-6 sm:gap-4">
        <div className="relative w-[70%] sm:w-[80%]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative w-[30%] sm:w-[20%] min-w-[100px]">
          <select
            className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500 focus:border-transparent appearance-none bg-white"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as typeof priceRange)}
          >
            <option value="all">All</option>
            <option value="under-500">Under ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="above-1000">Above ₹1000</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                {/* Desktop View */}
                <div className="hidden sm:block">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id.substring(0, 8)}
                      </h3>
                      <div className="flex items-center space-x-4 mt-3.5 text-sm text-black-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {order.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full font-medium inline-flex items-center ${
                        order.paymentMethod === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {order.paymentMethod === 'online' ? 'Online Payment' : 'Cash On Delivery'}
                      </div>
                      {order.paymentId && (
                        <div className="text-sm text-black-500 mt-2">
                          Payment ID: {order.paymentId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden">
                  <div className="flex justify-between items-start w-full flex-wrap">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id.substring(0, 8)}
                      </h3>
                      <div className={`px-2 py-1 rounded-full font-medium flex items-center text-sm justify-center ${
                        order.paymentMethod === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {order.paymentMethod === 'online' ? (
                          <CreditCard className="w-4 h-4" />
                        ) : (
                          <Wallet className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    <div className="mt-2 w-full flex justify-between text-sm text-black-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(order.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {order.time}
                      </span>
                    </div>
                    {order.paymentId && (
                      <div className="text-sm text-black-800 mt-2">
                        Payment ID: {order.paymentId}
                      </div>
                    )}
                  </div>
                </div>

                {/* Border before items - visible in both mobile and desktop */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Items Section */}
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 pl-2 pr-2">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder-food.jpg';
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-medium">{item.name}</h4>
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-gray-900 font-medium flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pl-2 pr-2 pt-2 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex justify-between text-black-500">
                      <span>Subtotal</span>
                      <span className="flex items-center">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        {order.subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-black-500">
                      <span>CGST (9%)</span>
                      <span className="flex items-center">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        {order.cgst.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-black-500">
                      <span>SGST (9%)</span>
                      <span className="flex items-center">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        {order.sgst.toFixed(2)}
                      </span>
                      </div>
                    </div>
                </div>
                <div className="mt-4 pt-2 pl-2 pr-2 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span className="flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {order.total.toFixed(2)}
                      </span>
                    </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">
              {orders.length === 0 
                ? "You haven't placed any orders yet" 
                : "No orders match your current filters"}
            </p>
            {orders.length > 0 && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange('all');
                }}
                className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}