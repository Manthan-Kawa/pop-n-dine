import React, { useState, useRef } from 'react';
import { useUserStore } from '../store/userStore';
import { Camera, Loader2, Eye, EyeOff } from 'lucide-react';
import { auth, db, storage } from '../firebaseConfig';
import { 
  updatePassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider,
  updateProfile as updateAuthProfile
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

export default function ProfileUpdate() {
  const user = useUserStore(state => state.user);
  const { updateUser, logout } = useUserStore();
  const [isLoading, setIsLoading] = useState({
    profile: false,
    password: false
  });
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '+91',
    image: user?.image || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setFormData(prev => ({ ...prev, phone: '+91' }));
    } else if (value.startsWith('+91') && /^\+91\d*$/.test(value)) {
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  const uploadImageToStorage = async (file: File, userId: string) => {
    try {
      if (user?.image && !user.image.includes('via.placeholder.com')) {
        try {
          const oldImageRef = storageRef(storage, `profile_images/${userId}`);
          await deleteObject(oldImageRef);
        } catch (error) {
          console.log('No existing image to delete or error deleting:', error);
        }
      }

      const imageRef = storageRef(storage, `profile_images/${userId}`);
      await uploadBytes(imageRef, file);
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload profile image');
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.uid || !auth.currentUser) return;
    
    setIsLoading(prev => ({ ...prev, profile: true }));

    try {
      let imageUrl = formData.image;
      
      if (selectedImageFile) {
        imageUrl = await uploadImageToStorage(selectedImageFile, user.uid);
      }

      // Update Firebase Auth profile
      await updateAuthProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL: imageUrl
      });

      // Update Firestore
      const userRef = doc(db, user.authProvider === 'google.com' ? 'google_logins' : 'manual_logins', user.uid);
      await updateDoc(userRef, {
        name: formData.name,
        phone: formData.phone,
        image: imageUrl,
        updatedAt: new Date()
      });

      // Update local state
      updateUser({
        name: formData.name,
        phone: formData.phone,
        image: imageUrl
      });

      setNotification({
        show: true,
        message: 'Profile updated successfully!',
        type: 'success'
      });

    } catch (error) {
      let errorMessage = 'Failed to update profile';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setNotification({
        show: true,
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setIsLoading(prev => ({ ...prev, profile: false }));
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !user?.uid) return;
    
    setIsLoading(prev => ({ ...prev, password: true }));

    try {
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        throw new Error('New passwords do not match');
      }
      
      if (passwordData.newPassword.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      const credential = EmailAuthProvider.credential(
        user.email || '',
        passwordData.currentPassword
      );
      
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, passwordData.newPassword);

      const userRef = doc(db, user.authProvider === 'google.com' ? 'google_logins' : 'manual_logins', user.uid);
      await updateDoc(userRef, {
        password: passwordData.newPassword,
        updatedAt: new Date()
      });

      setNotification({
        show: true,
        message: 'Password updated successfully! Logging out...',
        type: 'success'
      });

      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });

      setTimeout(() => {
        logout();
        navigate('/');
      }, 2000);

    } catch (error) {
      let errorMessage = 'Failed to update password';
      if (error instanceof Error) {
        switch (error.message) {
          case 'Firebase: Error (auth/wrong-password).':
            errorMessage = 'Current password is incorrect';
            break;
          case 'Firebase: Error (auth/weak-password).':
            errorMessage = 'Password should be at least 6 characters';
            break;
          case 'Firebase: Error (auth/requires-recent-login).':
            errorMessage = 'Please re-login to change password';
            break;
          default:
            errorMessage = error.message;
        }
      }
      
      setNotification({
        show: true,
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setIsLoading(prev => ({ ...prev, password: false }));
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {notification.show && (
          <div className={`mb-6 p-4 rounded-lg ${
            notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {notification.message}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Update Form */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
            
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center space-y-4">
                <div 
                  className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer group"
                  onClick={handleImageClick}
                >
                  <img
                    src={formData.image || 'https://via.placeholder.com/128'}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <p className="text-sm text-gray-500">Click to change profile picture</p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  placeholder="+91"
                  pattern="\+91[0-9]{10}"
                  title="Please enter a valid Indian phone number starting with +91"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading.profile || isLoading.password}
                className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading.profile ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Updating...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </form>
          </div>

          {/* Password Change Form */}
          <div className="flex-1 bg-white rounded-lg shadow p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Change Password</h2>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading.password || isLoading.profile}
                className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading.password ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Updating Password...
                  </>
                ) : (
                  'Change Password'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}