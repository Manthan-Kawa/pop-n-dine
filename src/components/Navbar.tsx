import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, User, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useUserStore } from '../store/userStore';
import logo from '../components/Images/Pop-N-DIne-1.png';
import AuthModal from '../components/AuthModal';
import UserMenu from './UserMenu';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const cartItems = useCartStore((state) => state.items);
  const { isAuthenticated, user } = useUserStore();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Pop-N-Dine Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex items-center md:hidden">
              {isAuthenticated && (
                <div className="relative mr-4 pt-1" ref={menuRef}>
                  <button
                    onClick={toggleUserMenu}
                    aria-label="User menu"
                    className="focus:outline-none"
                  >
                    <img
                      src={user?.image || 'https://via.placeholder.com/32'}
                      alt={user?.name || 'User avatar'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                  <UserMenu 
                    isOpen={isUserMenuOpen} 
                    onClose={() => setIsUserMenuOpen(false)} 
                    isMobile 
                  />
                </div>
              )}
              <button 
                onClick={onCartClick}
                className="relative mr-4 text-gray-600 hover:text-gray-900"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/menu" className="text-gray-800 hover:text-gray-900 font-medium">
                Menu
              </Link>
              <Link to="/reserve" className="text-gray-800 hover:text-gray-900 font-medium">
                Reserve
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-900 font-medium">
                Contact
              </Link>
              <button 
                onClick={onCartClick}
                className="relative text-gray-800 hover:text-gray-900"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </button>
              {isAuthenticated ? (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 focus:outline-none"
                    aria-label="User menu"
                    aria-expanded={isUserMenuOpen}
                  >
                    <img
                      src={user?.image || 'https://via.placeholder.com/32'}
                      alt={user?.name || 'User avatar'}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{user?.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="text-gray-800 hover:text-gray-900"
                  aria-label="Sign in"
                >
                  <User className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/menu"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Menu
              </Link>
              <Link
                to="/reserve"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Reserve
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Contact Us
              </Link>
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    closeAllMenus();
                  }}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="h-16"></div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}