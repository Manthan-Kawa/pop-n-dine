import React, { useState, useRef, useEffect } from 'react';
import { X, Eye, EyeOff, Upload, ArrowLeft } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import { 
  manualSignUp, 
  signInWithGoogle, 
  manualLogin,
  auth, 
  getUserDocument 
} from '../firebaseConfig';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  profileImage: null as File | null
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      setNotification({ show: false, message: '', type: 'success' });
      return;
    }
    
    setFormData(initialFormData);
    setPreviewImage(null);
    setNotification({ show: false, message: '', type: 'success' });
  }, [isOpen, isLogin]);

  useEffect(() => {
    if (isLogin) {
      setIsFormValid(
        formData.email.trim() !== '' && 
        formData.password.trim() !== ''
      );
    } else {
      const passwordsValid = 
        formData.password.trim() !== '' && 
        formData.confirmPassword.trim() !== '' && 
        formData.password === formData.confirmPassword;
      
      setIsFormValid(
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' && 
        passwordsValid
      );
      
      setPasswordsMatch(
        formData.confirmPassword === '' || 
        formData.password === formData.confirmPassword
      );
    }
  }, [formData, isLogin]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithGoogle();
      const userDoc = await getUserDocument(result.uid);
      
      if (userDoc) {
        setNotification({
          show: true,
          message: 'Login Successful!',
          type: 'success'
        });
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      } else {
        setNotification({
          show: true,
          message: 'User not found. Please sign up first.',
          type: 'error'
        });
        await auth.signOut();
      }
    } catch (error) {
      setNotification({
        show: true,
        message: error instanceof Error ? error.message : 'Google authentication failed',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);

    try {
      if (isLogin) {
        // Handle login
        await manualLogin(formData.email, formData.password);
        setNotification({
          show: true,
          message: 'Sign in successful!',
          type: 'success'
        });
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      } else {
        // Handle sign up
        await manualSignUp(
          formData.email,
          formData.password,
          formData.name,
          formData.profileImage
        );
        
        setNotification({
          show: true,
          message: 'Account created successfully!',
          type: 'success'
        });
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      let errorMessage = isLogin ? 'Login failed' : 'Sign Up failed';
      if (error instanceof Error) {
        switch (error.message) {
          case 'Firebase: Error (auth/email-already-in-use).':
            errorMessage = 'Email already in use';
            break;
          case 'Firebase: Error (auth/weak-password).':
            errorMessage = 'Password should be at least 6 characters';
            break;
          case 'Firebase: Error (auth/invalid-email).':
            errorMessage = 'Invalid email address';
            break;
          case 'Firebase: Error (auth/user-not-found).':
            errorMessage = 'User not found';
            break;
          case 'Firebase: Error (auth/wrong-password).':
            errorMessage = 'Wrong password';
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
      setIsLoading(false);
    }
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto relative my-8 max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          disabled={isLoading}
        >
          <X className="w-6 h-6" />
        </button>

        {!isLogin && (
          <button 
            onClick={() => setIsLogin(true)}
            className="absolute left-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            disabled={isLoading}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}

        <div className="p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          {notification.show && (
            <div className={`mb-4 p-3 rounded-lg ${
              notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {notification.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="flex flex-col items-center">
                  <div 
                    className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden border-2 border-gray-300 flex items-center justify-center cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewImage ? (
                      <img src={previewImage} alt="Profile preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400">
                        <Upload className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {previewImage ? 'Change photo' : 'Upload profile photo'}
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder="Enter your name"
                    required
                    disabled={isLoading}
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none"
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none pr-10"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  disabled={isLoading}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none pr-10 ${
                      passwordsMatch ? 'focus:ring-gray-200 border-gray-300' : 'focus:ring-red-200 border-red-500'
                    }`}
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    disabled={isLoading}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {!passwordsMatch && formData.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button 
                  type="button" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  disabled={isLoading}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full py-2 rounded-lg transition-colors ${
                isFormValid && !isLoading
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <span className="inline-block animate-spin">⏳</span>
              ) : isLogin ? 'Sign In' : 'Sign Up'}
            </button>

            {isLogin && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <img 
                    src="https://www.google.com/favicon.ico" 
                    alt="Google" 
                    className="w-5 h-5"
                  />
                  <span>Log in with Google</span>
                </button>
              </>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={handleSwitchMode}
                className="ml-1 text-gray-900 hover:underline font-medium"
                disabled={isLoading}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}