import React from 'react';
import { useUserStore } from '../store/userStore';
import { ChevronLeft, User, MapPin, Calendar, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export default function UserMenu({ isOpen, onClose, isMobile = false }: UserMenuProps) {
  const user = useUserStore(state => state.user);
  const logout = useUserStore(state => state.logout);
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    logout();
    navigate('/');
    setTimeout(onClose, 100);
  };

  const menuItems = [
    { icon: MapPin, label: 'My Addresses', path: '/addresses' },
    { icon: Calendar, label: 'My Reservations', path: '/reservations' },
    { icon: ShoppingBag, label: 'My Orders', path: '/orders' }
  ];

  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        onClick={onClose}
      >
        <div 
          className="w-full sm:w-96 bg-white min-h-screen shadow-xl transform transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b flex items-center">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full active:bg-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="ml-2 text-xl font-semibold">Account</span>
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={user?.image || 'https://via.placeholder.com/64'}
                alt={user?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{user?.name}</h3>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.path}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleMenuItemClick(item.path)}
                  onPointerDown={(e) => e.preventDefault()}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleLogout}
                onTouchStart={handleLogout}
                className="mt-8 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 active:bg-gray-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 transition-opacity duration-200"
      style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {menuItems.map((item) => (
        <div
          key={item.path}
          role="button"
          tabIndex={0}
          onClick={() => handleMenuItemClick(item.path)}
          onPointerDown={(e) => e.preventDefault()}
          className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
        >
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </div>
      ))}
      <div
        onClick={handleLogout}
        onTouchStart={handleLogout}
        className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 active:bg-red-100 cursor-pointer"
      >
        Sign Out
      </div>
    </div>
  );
}