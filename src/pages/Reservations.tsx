import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, X } from 'lucide-react';
import { db, auth } from '../firebaseConfig';
import { collection, query, where, getDocs, doc, updateDoc, orderBy, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequest: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  isModified: boolean;
  userId: string;
  userEmail: string;
  createdAt: any;
  payment?: {
    id: string;
    amount: number;
    currency: string;
    status: string;
    method: string;
  };
}

export default function Reservations() {
  const [user, loadingUser] = useAuthState(auth);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'cancelled' | 'past'>('upcoming');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{message: string; isCritical: boolean} | null>(null);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedReservation, setEditedReservation] = useState<Reservation | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Function to check and update expired reservations
  const checkAndUpdateExpiredReservations = async () => {
    const now = new Date();
    const expiredReservations = reservations.filter(reservation => {
      if (reservation.status !== 'upcoming') return false;
      
      try {
        const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
        return reservationDateTime < now;
      } catch (e) {
        console.error("Error checking reservation date/time:", e);
        return false;
      }
    });

    if (expiredReservations.length > 0) {
      try {
        const batchUpdates = expiredReservations.map(async (reservation) => {
          if (!reservation.id) return;
          
          await updateDoc(doc(db, 'Reserve', reservation.id), {
            status: 'completed',
            updatedAt: serverTimestamp()
          });
        });

        await Promise.all(batchUpdates);
        
        // Update local state to reflect changes
        setReservations(prev => 
          prev.map(res => 
            expiredReservations.some(er => er.id === res.id)
              ? { ...res, status: 'completed' }
              : res
          )
        );
      } catch (error) {
        console.error("Failed to update expired reservations:", error);
      }
    }
  };

  // Set up interval to check for expired reservations
  useEffect(() => {
    const interval = setInterval(checkAndUpdateExpiredReservations, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [reservations]);

  // Run immediately when reservations change
  useEffect(() => {
    if (reservations.length > 0) {
      checkAndUpdateExpiredReservations();
    }
  }, [reservations]);

  const filteredReservations = reservations.filter(reservation => {
    if (!reservation.date || !reservation.time) return false;
    
    try {
      const now = new Date();
      const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
      
      switch (activeTab) {
        case 'upcoming': 
          return reservation.status === 'upcoming' && reservationDateTime >= now;
        case 'cancelled': 
          return reservation.status === 'cancelled';
        case 'past': 
          return reservation.status === 'completed' || 
                (reservation.status === 'upcoming' && reservationDateTime < now);
        default: 
          return false;
      }
    } catch (e) {
      console.error("Error processing reservation date/time:", e);
      return false;
    }
  });

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid date";
    }
  };

  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(':');
      const hourNum = parseInt(hours);
      const period = hourNum >= 12 ? 'PM' : 'AM';
      const displayHour = hourNum % 12 || 12;
      return `${displayHour}:${minutes} ${period}`;
    } catch (e) {
      console.error("Error formatting time:", e);
      return timeStr;
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!user) {
          throw new Error("User not authenticated");
        }

        if (!user.email) {
          throw new Error("User email not available");
        }

        const q = query(
          collection(db, 'Reserve'),
          where("userEmail", "==", user.email),
          orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const userReservations: Reservation[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            userReservations.push({
              id: doc.id,
              date: data.date,
              time: data.time,
              guests: data.guests,
              name: data.name,
              email: data.email || user.email || '',
              phone: data.phone || '',
              specialRequest: data.specialRequest || '',
              status: data.status || 'upcoming',
              isModified: data.isModified || false,
              userId: data.userId || user.uid,
              userEmail: data.userEmail,
              createdAt: data.createdAt?.toDate() || new Date(),
              payment: data.payment || undefined
            });
          });
          setReservations(userReservations);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Reservation fetch error:", error);
        setError({
          message: error instanceof Error ? error.message : "Failed to load reservations",
          isCritical: true
        });
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchReservations();
    }
  }, [user, retryCount]);

  const handleCancel = async (reservation: Reservation) => {
    try {
      if (!reservation.id) {
        throw new Error("Invalid reservation ID");
      }
      
      await updateDoc(doc(db, 'Reserve', reservation.id), {
        status: 'cancelled',
        updatedAt: serverTimestamp()
      });
      
      setReservations(prev =>
        prev.map(res =>
          res.id === reservation.id
            ? { ...res, status: 'cancelled' }
            : res
        )
      );
      setSelectedReservation(null);
    } catch (error) {
      console.error("Failed to cancel reservation:", error);
      setError({
        message: "Failed to cancel reservation. Please try again.",
        isCritical: true
      });
    }
  };

  const handleModify = () => {
    if (selectedReservation) {
      setEditedReservation({ ...selectedReservation });
      setIsEditing(true);
    }
  };

  const handleSaveModification = async () => {
    if (!editedReservation || !editedReservation.id) return;
    
    try {
      await updateDoc(doc(db, 'Reserve', editedReservation.id), {
        date: editedReservation.date,
        time: editedReservation.time,
        guests: editedReservation.guests,
        name: editedReservation.name,
        phone: editedReservation.phone,
        specialRequest: editedReservation.specialRequest,
        isModified: true,
        updatedAt: serverTimestamp()
      });
      
      setReservations(prev =>
        prev.map(res =>
          res.id === editedReservation.id
            ? { 
                ...res, 
                ...editedReservation,
                isModified: true 
              }
            : res
        )
      );
      setSelectedReservation(null);
      setIsEditing(false);
      setEditedReservation(null);
    } catch (error) {
      console.error("Failed to update reservation:", error);
      setError({
        message: "Failed to update reservation. Please try again.",
        isCritical: true
      });
    }
  };

  const ErrorDisplay = () => {
    if (!error) return null;

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className={`${error.isCritical ? 'bg-red-100 border-red-400 text-red-700' : 'bg-yellow-100 border-yellow-400 text-yellow-700'} border px-4 py-3 rounded relative`}>
          <strong className="block font-bold">Error loading reservations</strong>
          <span className="block sm:inline">{error.message}</span>
          <div className="mt-4 flex space-x-3">
            <button 
              onClick={() => setRetryCount(prev => prev + 1)} 
              className={`${error.isCritical ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 py-2 rounded`}
            >
              Retry
            </button>
            <button 
              onClick={() => window.location.href = '/reserve'} 
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loadingUser) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 flex justify-center items-center h-64">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-1 border-b-2 border-black mr-4"></div>
          <span>Loading your Reservations...</span>
        </div>
      </div>
    );
  }

  if (!user && !loadingUser) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <p className="font-bold">Authentication Required</p>
          <p>You need to be logged in to view reservations.</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="mt-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay />;
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 flex justify-center items-center h-64">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-1 border-b-2 border-black mr-4"></div>
          <span>Loading your Reservations...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 pt-8 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">My Reservations</h1>

      <div className="flex justify-center sm:justify-start space-x-4 mb-6 border-b">
        <button
          className={`pb-2 px-4 ${
            activeTab === 'upcoming'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`pb-2 px-4 ${
            activeTab === 'cancelled'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
        </button>
        <button
          className={`pb-2 px-4 ${
            activeTab === 'past'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>

      <div className="space-y-4">
        {filteredReservations.map((reservation) => {
          let borderColor = '';
          if (reservation.status === 'upcoming') {
            borderColor = reservation.isModified ? 'border-l-4 border-black' : 'border-l-4 border-green-500';
          } else if (reservation.status === 'cancelled') {
            borderColor = 'border-l-4 border-red-600';
          } else {
            borderColor = 'border-l-4 border-gray-100';
          }

          return (
            <div
              key={reservation.id}
              className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow ${
                activeTab === 'upcoming' ? 'cursor-pointer' : 'cursor-default'
              } ${borderColor}`}
              onClick={() => activeTab === 'upcoming' && setSelectedReservation(reservation)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{formatDate(reservation.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span>{formatTime(reservation.time)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>{reservation.guests} {reservation.guests === 1 ? 'guest' : 'guests'}</span>
                  </div>
                  {reservation.payment?.id && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Payment ID:</span>
                      <span className="text-sm font-medium">{reservation.payment.id}</span>
                    </div>
                  )}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center justify-center min-w-[100px]
                  ${reservation.status === 'upcoming' ? 'bg-green-100 text-green-800' : 
                    reservation.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                    'bg-red-100 text-red-800'}`}>
                  <span className="text-center">
                    {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        
        {filteredReservations.length === 0 && !loading && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-4">No {activeTab} reservations found.</p>
            <a 
              href="/reserve" 
              className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Make a Reservation
            </a>
          </div>
        )}
      </div>

      {selectedReservation && !isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedReservation(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-semibold mb-6 text-center">Reservation Details</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Name</div>
                  <div className="font-medium ">{selectedReservation.name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Date</div>
                  <div className="font-medium">{formatDate(selectedReservation.date)}</div>
                </div>
                <div className="space-y-1 col-span-2">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium break-all">{selectedReservation.email}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Time</div>
                  <div className="font-medium">{formatTime(selectedReservation.time)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">{selectedReservation.phone || 'Not provided'}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Number of Guests</div>
                  <div className="font-medium">{selectedReservation.guests}</div>
                </div>
                {selectedReservation.payment?.id && (
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500 whitespace-nowrap">Payment ID</div>
                    <div className="font-medium break-all">{selectedReservation.payment.id}</div>
                  </div>
                )}
              </div>
            
              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-1">Special Request</div>
                <div className="font-medium">{selectedReservation.specialRequest || 'No special requests'}</div>
              </div>
            </div>

            {selectedReservation.status === 'upcoming' && (
              <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button 
                  className="w-full sm:w-2/3 bg-red-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
                  onClick={() => handleCancel(selectedReservation)}
                >
                  Cancel Reservation
                </button>
                <button 
                  className="w-full sm:w-1/3 bg-black hover:bg-gray-800 text-white py-2 rounded-lg transition-colors"
                  onClick={handleModify}
                >
                  Modify
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isEditing && editedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedReservation(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-semibold text-center mb-6">Edit Reservation</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    value={editedReservation.name}
                    onChange={(e) => setEditedReservation({
                      ...editedReservation,
                      name: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date *</label>
                  <input
                    type="date"
                    value={editedReservation.date}
                    onChange={(e) => setEditedReservation({
                      ...editedReservation,
                      date: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={editedReservation.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1 bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time *</label>
                  <input
                    type="time"
                    value={editedReservation.time}
                    onChange={(e) => setEditedReservation({
                      ...editedReservation,
                      time: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    value={editedReservation.phone}
                    onChange={(e) => setEditedReservation({
                      ...editedReservation,
                      phone: e.target.value
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Guests *</label>
                  <input
                    type="number"
                    value={editedReservation.guests}
                    onChange={(e) => setEditedReservation({
                      ...editedReservation,
                      guests: parseInt(e.target.value) || 1
                    })}
                    min="1"
                    max="20"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                    required
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700">Special Request</label>
                <textarea
                  value={editedReservation.specialRequest}
                  onChange={(e) => setEditedReservation({
                    ...editedReservation,
                    specialRequest: e.target.value
                  })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-2 py-1"
                  placeholder="Enter any special requests (optional)..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                className="w-full sm:w-2/3 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors"
                onClick={() => {
                  setIsEditing(false);
                  setEditedReservation(null);
                }}
              >
                Cancel
              </button>
              <button
                className="w-full sm:w-1/3 bg-black hover:bg-gray-800 text-white py-2 rounded-lg transition-colors"
                onClick={handleSaveModification}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}