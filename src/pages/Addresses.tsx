import React, { useState, useCallback, useEffect } from 'react';
import { Home, Plus, MoreVertical, ChevronRight, Share2, Briefcase, Trash2, Edit2, X, MapPin, Search, CheckCircle } from 'lucide-react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { db, auth } from '../firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { motion, AnimatePresence } from 'framer-motion';
import { onAuthStateChanged } from 'firebase/auth';
import { useCartStore } from '../store/cartStore';

interface Address {
  id: string;
  type: 'home' | 'work';
  distance?: string;
  fullAddress: string;
  details: string;
  phoneNumber: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const RESTAURANT_LOCATION = {
  lat: 19.168163876313173,
  lng: 72.8457894845319
};

const GOOGLE_MAPS_API_KEY = 'AIzaSyAhpDpXxX_MdQK3qMRun0zzu223DvxjoBs';

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

export default function Addresses() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const { triggerRefresh } = useCartStore();

  // State declarations
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'map' | 'details'>('map');
  const [selectedType, setSelectedType] = useState<'home' | 'work'>('home');
  const [addressDetails, setAddressDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mapCenter, setMapCenter] = useState(RESTAURANT_LOCATION);
  const [markerPosition, setMarkerPosition] = useState(RESTAURANT_LOCATION);
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [notification, setNotification] = useState<{message: string, visible: boolean}>({
    message: '',
    visible: false
  });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => RESTAURANT_LOCATION.lat, lng: () => RESTAURANT_LOCATION.lng },
      radius: 20 * 1000,
    },
    debounce: 300,
    cache: 86400,
  });

  // Notification handler
  const showNotification = (message: string) => {
    setNotification({ message, visible: true });
    setTimeout(() => {
      setNotification({ message: '', visible: false });
    }, 3000);
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchAddresses(user.email || '');
      } else {
        setCurrentUser(null);
        setAddresses([]);
      }
    });
    
    return () => unsubscribe();
  }, []);

  // Fetch addresses from Firestore
  const fetchAddresses = useCallback(async (userEmail: string) => {
    try {
      setLoading(true);
      const q = query(collection(db, "AD"), where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      const addressesData: Address[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        addressesData.push({
          id: doc.id,
          type: data.type,
          distance: data.distance,
          fullAddress: data.fullAddress,
          details: data.details,
          phoneNumber: data.phoneNumber,
          email: data.email,
          coordinates: data.coordinates
        });
      });
      
      setAddresses(addressesData);
    } catch (error) {
      console.error("Error fetching addresses: ", error);
      setError("Failed to load addresses. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Helper functions
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const calculateExactDistance = async (origin: google.maps.LatLngLiteral): Promise<string> => {
    return new Promise((resolve) => {
      const service = new google.maps.DistanceMatrixService();
      
      service.getDistanceMatrix({
        origins: [origin],
        destinations: [RESTAURANT_LOCATION],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      }, (response, status) => {
        if (status === 'OK' && response) {
          const distance = response.rows[0].elements[0].distance.text;
          resolve(distance);
        } else {
          const R = 6371;
          const dLat = (RESTAURANT_LOCATION.lat - origin.lat) * Math.PI / 180;
          const dLon = (RESTAURANT_LOCATION.lng - origin.lng) * Math.PI / 180;
          const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(origin.lat * Math.PI / 180) * Math.cos(RESTAURANT_LOCATION.lat * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          const distance = R * c;

          resolve(distance < 1 ? 
            `${Math.round(distance * 1000)} m` : 
            `${distance.toFixed(1)} km`);
        }
      });
    });
  };

  const getCoordinatesFromAddress = async (address: string) => {
    try {
      const results = await getGeocode({ address });
      return await getLatLng(results[0]);
    } catch (error) {
      console.error('Error getting coordinates:', error);
      setError('Could not find this location. Please try a different address.');
      return null;
    }
  };

  // Event handlers
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    setValue(newValue);
    
    if (newValue.length > 0) {
      setShowSuggestions(true);
      
      if (isEditing && selectedAddress) {
        try {
          const coordinates = await getCoordinatesFromAddress(newValue);
          if (coordinates) {
            const distance = await calculateExactDistance(coordinates);
            setSelectedAddress({
              ...selectedAddress,
              distance,
              coordinates,
              fullAddress: newValue
            });
            setMapCenter(coordinates);
            setMarkerPosition(coordinates);
          }
        } catch (error) {
          console.error('Error calculating distance:', error);
          setError('Failed to calculate distance. Please try again.');
        }
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = async (description: string) => {
    setSearchValue(description);
    setValue(description, false);
    clearSuggestions();
    setShowSuggestions(false);
    
    try {
      const coordinates = await getCoordinatesFromAddress(description);
      if (coordinates) {
        setMapCenter(coordinates);
        setMarkerPosition(coordinates);
        
        const distance = await calculateExactDistance(coordinates);
        
        if (isEditing && selectedAddress) {
          setSelectedAddress({
            ...selectedAddress,
            distance,
            coordinates,
            fullAddress: description
          });
        }
      }
    } catch (error) {
      console.error('Error updating map location:', error);
      setError('Failed to update location. Please try again.');
    }
  };

  const handleInputFocus = () => {
    if (searchValue.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      setShowSuggestions(false);
      try {
        const coordinates = await getCoordinatesFromAddress(searchValue);
        if (coordinates) {
          setMapCenter(coordinates);
          setMarkerPosition(coordinates);
          
          if (isEditing && selectedAddress) {
            const distance = await calculateExactDistance(coordinates);
            setSelectedAddress({
              ...selectedAddress,
              distance,
              coordinates,
              fullAddress: searchValue
            });
          }
        }
      } catch (error) {
        console.error('Error searching location:', error);
        setError('Location search failed. Please try again.');
      }
    }
  };

  const handleClearSearch = () => {
    setSearchValue('');
    setValue('');
    clearSuggestions();
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updateDistanceFromDetails = async () => {
      if (isEditing && selectedAddress && addressDetails) {
        try {
          const coordinates = await getCoordinatesFromAddress(addressDetails);
          if (coordinates) {
            const distance = await calculateExactDistance(coordinates);
            setSelectedAddress({
              ...selectedAddress,
              distance,
              coordinates,
              details: addressDetails
            });
            setMapCenter(coordinates);
            setMarkerPosition(coordinates);
          }
        } catch (error) {
          console.error('Error calculating distance from details:', error);
          setError('Failed to calculate distance from details.');
        }
      }
    };

    const timeoutId = setTimeout(updateDistanceFromDetails, 1000);
    return () => clearTimeout(timeoutId);
  }, [addressDetails, isEditing, selectedAddress]);

  const handleMapClick = useCallback(async (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const newCoordinates = { lat, lng };
      setMarkerPosition(newCoordinates);
      
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: newCoordinates }, async (results, status) => {
        if (status === "OK" && results?.[0]) {
          const address = results[0].formatted_address;
          setSearchValue(address);
          setValue(address, false);
          
          const distance = await calculateExactDistance(newCoordinates);
          
          if (isEditing && selectedAddress) {
            setSelectedAddress({
              ...selectedAddress,
              distance,
              coordinates: newCoordinates,
              fullAddress: address
            });
          }
        } else {
          setError('Could not determine address for this location.');
        }
      });
    }
  }, [setValue, isEditing, selectedAddress]);

  const handleShare = async (address: Address) => {
    try {
      await navigator.share({
        title: 'Share Address',
        text: `${address.type.toUpperCase()}: ${address.fullAddress}\n${address.details}\nPhone: ${address.phoneNumber}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
      setError('Failed to share address. Please try again.');
    }
  };

  const handleSaveAddress = async () => {
    setError(null);
    
    if (!addressDetails.trim()) {
      setError('Please enter complete address details');
      return;
    }

    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!currentUser) {
      setError('You must be logged in to save addresses');
      return;
    }

    setIsSubmitting(true);

    try {
      let coordinates = markerPosition;
      let finalDistance = selectedAddress?.distance;

      if (coordinates === RESTAURANT_LOCATION && addressDetails) {
        const fullAddressCoords = await getCoordinatesFromAddress(searchValue || addressDetails);
        if (fullAddressCoords) {
          coordinates = fullAddressCoords;
          finalDistance = await calculateExactDistance(coordinates);
        }
      }

      if (!finalDistance) {
        finalDistance = await calculateExactDistance(coordinates);
      }

      const newAddress = {
        type: selectedType,
        fullAddress: searchValue,
        details: addressDetails,
        phoneNumber,
        email: currentUser.email,
        coordinates,
        distance: finalDistance
      };

      if (isEditing && selectedAddress) {
        await updateDoc(doc(db, "AD", selectedAddress.id), newAddress);
        showNotification('Address updated successfully!');
      } else {
        await addDoc(collection(db, "AD"), newAddress);
        showNotification('Address added successfully!');
      }
      
      await fetchAddresses(currentUser.email);
      triggerRefresh();
      resetForm();
      
    } catch (error) {
      console.error("Error saving address: ", error);
      setError('Failed to save address. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsAddingAddress(false);
    setIsEditing(false);
    setSelectedAddress(null);
    setCurrentStep('map');
    setSearchValue('');
    setValue('');
    setAddressDetails('');
    setPhoneNumber('');
    setSelectedType('home');
    setMapCenter(RESTAURANT_LOCATION);
    setMarkerPosition(RESTAURANT_LOCATION);
    setShowSuggestions(false);
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "AD", id));
      setAddresses(addresses.filter(addr => addr.id !== id));
      setShowActionMenu(null);
      showNotification('Address deleted successfully!');
      triggerRefresh();
    } catch (error) {
      console.error("Error deleting address: ", error);
      setError('Failed to delete address. Please try again.');
    }
  };

  const handleEdit = (address: Address) => {
    setSelectedAddress(address);
    setIsEditing(true);
    setIsAddingAddress(true);
    setCurrentStep('map');
    setSearchValue(address.fullAddress);
    setValue(address.fullAddress);
    setAddressDetails(address.details);
    setPhoneNumber(address.phoneNumber);
    setSelectedType(address.type);
    setMapCenter(address.coordinates);
    setMarkerPosition(address.coordinates);
    setShowActionMenu(null);
    showNotification('Editing address...');
  };

  if (!isLoaded || loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 flex justify-center items-center h-64">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-1 border-b-2 border-black mr-4"></div>
        <span>Syncying your Addresses...</span>
      </div>
    </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white rounded-xl p-8 text-center shadow-sm max-w-md mx-4">
          <h2 className="text-xl font-semibold mb-4">Please sign in</h2>
          <p className="text-gray-600 mb-6">
            You need to be signed in to view and manage your addresses.
          </p>
          <button
            onClick={() => window.location.href = '/login'}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Notification */}
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg z-50 flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg z-50 flex items-center"
          >
            <span>{error}</span>
            <button 
              onClick={() => setError(null)} 
              className="ml-4 text-red-700 hover:text-red-900"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center mb-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">My Addresses</h1>
            <div className="text-md text-gray-500">
              Logged in as: {currentUser.email}
            </div>
          </div>

          {/* Add New Address Button */}
          <button
            onClick={() => setIsAddingAddress(true)}
            className="w-full bg-white rounded-xl p-4 mb-4 flex items-center text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-red-500" />
            </div>
            <span className="ml-3 text-lg text-red-500">Add address</span>
            <ChevronRight className="ml-auto text-gray-400" />
          </button>

          {/* Saved Addresses */}
          {addresses.length > 0 ? (
            <>
              <h2 className="text-gray-500 font-medium mb-4">SAVED ADDRESSES</h2>
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="bg-white rounded-xl p-4 shadow-sm relative">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        {address.type === 'home' ? (
                          <Home className="w-6 h-6 text-gray-600" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-gray-600" />
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold capitalize">{address.type}</h3>
                        <span className="text-sm text-gray-500">{address.distance}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{address.fullAddress}</p>
                    <p className="text-gray-600 mb-2">{address.details}</p>
                    <p className="text-gray-600">Phone: {address.phoneNumber}</p>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => setShowActionMenu(address.id)}
                      >
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => handleShare(address)}
                      >
                        <Share2 className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Action Menu */}
                    {showActionMenu === address.id && (
                      <div className="absolute right-4 top-16 bg-white rounded-lg shadow-lg py-2 z-10">
                        <button
                          onClick={() => handleEdit(address)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center"
                        >
                          <Edit2 className="w-4 h-4 mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(address.id)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">No saved addresses yet</h3>
              <p className="text-gray-500 mb-4">Add your first address to get started</p>
              <button
                onClick={() => setIsAddingAddress(true)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Add Address
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Address Modal */}
      {isAddingAddress && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-xl max-h-[90vh] overflow-y-auto sm:inset-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-md sm:rounded-xl">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {currentStep === 'map' ? 'Select Location' : 'Add Address Details'}
              </h2>
              <button onClick={resetForm} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            {currentStep === 'map' ? (
              <div className="p-4">
                <div className="relative mb-4 search-container">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for area, street name..."
                    className="w-full pl-10 pr-10 py-2 border rounded-lg"
                  />
                  {searchValue && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-3 top-2.5 p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                  {status === "OK" && showSuggestions && data.length > 0 && (
                    <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
                      {data.map(({ place_id, description }) => (
                        <li key={place_id}>
                          <button
                            onClick={() => handleSelect(description)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                          >
                            {description}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="w-full h-[300px] rounded-lg mb-4">
                  <GoogleMap
                    center={mapCenter}
                    zoom={15}
                    onClick={handleMapClick}
                    mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
                  >
                    <Marker position={markerPosition} />
                  </GoogleMap>
                </div>

                <button
                  onClick={() => setCurrentStep('details')}
                  className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Confirm Location
                </button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {currentUser.email}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Address will be saved to your account
                  </p>
                </div>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setSelectedType('home')}
                    className={`flex-1 py-3 rounded-lg border flex items-center justify-center space-x-2 ${
                      selectedType === 'home' ? 'border-red-500 bg-red-50' : 'border-gray-200'
                    }`}
                  >
                    <Home className={`w-5 h-5 ${selectedType === 'home' ? 'text-red-500' : 'text-gray-500'}`} />
                    <span className={selectedType === 'home' ? 'text-red-500' : 'text-gray-500'}>Home</span>
                  </button>
                  <button
                    onClick={() => setSelectedType('work')}
                    className={`flex-1 py-3 rounded-lg border flex items-center justify-center space-x-2 ${
                      selectedType === 'work' ? 'border-red-500 bg-red-50' : 'border-gray-200'
                    }`}
                  >
                    <Briefcase className={`w-5 h-5 ${selectedType === 'work' ? 'text-red-500' : 'text-gray-500'}`} />
                    <span className={selectedType === 'work' ? 'text-red-500' : 'text-gray-500'}>Work</span>
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Complete Address
                  </label>
                  <textarea
                    rows={3}
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    placeholder="Flat number, Building, Area, Landmark"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setPhoneNumber(value);
                    }}
                    placeholder="Enter 10-digit phone number"
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setCurrentStep('map')}
                    className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSaveAddress}
                    disabled={isSubmitting}
                    className={`flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      'Save Address'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}