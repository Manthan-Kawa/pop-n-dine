import React, { useState, useEffect, useRef } from 'react';
import { menuItems } from '../data/menuItems';
import { useCartStore } from '../store/cartStore';
import { MenuItem } from '../types';
import { ChevronDown, SlidersHorizontal, X, MenuSquare, Search, Plus, Minus, Star } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Items' },
  { value: 'Indian-Selection', label: 'Indian-Selection' },
  { value: 'Starters', label: 'Starters' },
  { value: 'Tandoor Sea-Food', label: 'Tandoor Sea-Food' },
  { value: 'Tandoor Selection', label: 'Tandoor Selection' },
  { value: 'Main Course', label: 'Main Course' },
  { value: 'Lamb Specialities', label: 'Lamb Specialities' },
  { value: 'Sea-Food Specialities', label: 'Sea-Food Specialities' },
  { value: 'Roti', label: 'Roti' },
  { value: 'Rice Preparations', label: 'Rice Preparations' },
  { value: 'Salad / Raitha', label: 'Salad / Raitha' },
  { value: 'Chinese Selection Soup', label: 'Chinese Selection Soup' },
  { value: 'Sea Food', label: 'Sea Food' },
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Lamb', label: 'Lamb' },
  { value: 'Rice & Noodles', label: 'Rice & Noodles' },
  { value: 'Desserts', label: 'Desserts' },
];

const priceRanges = [
  { value: 'none', label: 'All Prices' },
  { value: 'low-to-high', label: 'Low to High' },
  { value: 'high-to-low', label: 'High to Low' },
  { value: 'under-200', label: 'Under ₹200' },
  { value: '200-500', label: '₹200 - ₹500' },
  { value: '500-1000', label: '₹500 - ₹1000' },
  { value: 'above-1000', label: 'Above ₹1000' },
];

const MAX_PRICE = 2000;
const MAX_HISTORY = 5;

const styles = `
/* Base transitions */
* {
  transition: 
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

/* Card hover animation */
@keyframes cardHover {
  from {
    transform: translateY(0) scale(1) rotateY(0);
  }
  to {
    transform: translateY(-5px) scale(1.02) rotateY(3deg);
  }
}

.menu-card {
  transition: 
    transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    opacity 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  will-change: transform;
}

.menu-card:hover {
  animation: cardHover 0.3s forwards;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Modal animations */
@keyframes modalOpen {
  from {
    transform: translateY(10px) scale(0.98);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes modalClose {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(10px) scale(0.98);
    opacity: 0;
  }
}

.modal-overlay {
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-content {
  border-radius: 12px;
  animation: modalOpen 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: center;
}

.modal-content.hide {
  animation: modalClose 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Button transitions */
button {
  transition: 
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

button:active {
  transform: scale(0.98);
}

/* Input transitions */
input, select {
  transition: 
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input:focus, select:focus {
  transition: 
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

/* Notification transition */
.notification {
  transition: 
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* Mobile card transitions */
.mobile-card {
  transition: 
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.mobile-card:active {
  transform: scale(0.98);
}

/* Smooth scrolling */
.reviews-section {
  scroll-behavior: smooth;
  transition: scroll-behavior 0.3s ease;
}

/* Filter transitions */
.filter-button {
  transition: 
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;
}

.filter-button:active {
  transform: scale(0.96);
}

/* Veg/non-veg toggle */
.toggle-switch {
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.toggle-switch-handle {
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Search suggestions */
.suggestions-container {
  transition: 
    opacity 0.2s ease,
    transform 0.2s ease;
}

/* Price range slider */
input[type="range"] {
  transition: box-shadow 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb {
  transition: transform 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:active {
  transform: scale(1.2);
}

/* Item quantity controls */
.quantity-control {
  transition: background-color 0.2s ease;
}

.quantity-control:active {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Responsive improvements */
@media (min-width: 1024px) {
  .menu-card {
    transition: 
      transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
      box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  .modal-content {
    transition: 
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
`;
export default function Menu() {
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('none');
  const [priceRange, setPriceRange] = useState<number>(MAX_PRICE);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [notification, setNotification] = useState<{ show: boolean; item: string }>({ show: false, item: '' });
  const [selectedPortions, setSelectedPortions] = useState<Record<number, boolean>>({});
  const [selectedQuantities, setSelectedQuantities] = useState<Record<number, number>>({});
  const [isVegOnly, setIsVegOnly] = useState(true);
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    setSelectedQuantities(prev => {
      const currentQuantity = prev[itemId] || 1;
      const newQuantity = Math.max(1, currentQuantity + change);
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const handleAddToCart = (item: MenuItem) => {
    const isHalf = item.hasPortions ? (selectedPortions[item.id] ?? false) : false;
    const quantity = item.hasQuantity ? (selectedQuantities[item.id] || 1) : 1;
    
    for (let i = 0; i < quantity; i++) {
      addToCart(item, isHalf);
    }

    setNotification({ 
      show: true, 
      item: `${quantity > 1 ? `${quantity}x ` : ''}${item.hasPortions ? (isHalf ? 'Half' : 'Full') : ''} ${item.name}` 
    });
    
    if (item.hasQuantity) {
      setSelectedQuantities(prev => ({ ...prev, [item.id]: 1 }));
    }

    setTimeout(() => {
      setNotification({ show: false, item: '' });
    }, 2000);
  };

  const getSuggestions = (query: string): string[] => {
    if (!query) return [];
    
    const searchTerms = query.toLowerCase();
    const suggestions = new Set<string>();
    
    menuItems.forEach(item => {
      if (item.name.toLowerCase().startsWith(searchTerms)) {
        suggestions.add(item.name);
      }
      if (item.category.toLowerCase().startsWith(searchTerms)) {
        suggestions.add(item.category);
      }
    });
    
    return Array.from(suggestions).slice(0, 5);
  };

  const suggestions = getSuggestions(searchQuery);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    setShowSuggestions(false);
    
    if (term && !searchHistory.includes(term)) {
      const newHistory = [term, ...searchHistory.slice(0, MAX_HISTORY - 1)];
      setSearchHistory(newHistory);
    }
  };

  const removeFromHistory = (term: string) => {
    const newHistory = searchHistory.filter(t => t !== term);
    setSearchHistory(newHistory);
  };

  const clearSearchQuery = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  let filteredItems = menuItems;
  
  filteredItems = filteredItems.filter(item => isVegOnly ? item.isVeg : !item.isVeg);

  if (searchQuery) {
    const searchTerms = searchQuery.toLowerCase();

    filteredItems = filteredItems.filter(item => {
      return item.name.toLowerCase().startsWith(searchTerms);
    });
  }
  
  if (category !== 'all') {
    filteredItems = filteredItems.filter(item => item.category === category);
  }

  filteredItems = filteredItems.filter(item => item.price <= priceRange);

  if (priceFilter !== 'none') {
    switch (priceFilter) {
      case 'low-to-high':
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        filteredItems.sort((a, b) => b.price - a.price);
        break;
      case 'under-200':
        filteredItems = filteredItems.filter(item => item.price < 200);
        break;
      case '200-500':
        filteredItems = filteredItems.filter(item => item.price >= 200 && item.price <= 500);
        break;
      case '500-1000':
        filteredItems = filteredItems.filter(item => item.price > 500 && item.price <= 1000);
        break;
      case 'above-1000':
        filteredItems = filteredItems.filter(item => item.price > 1000);
        break;
    }
  }

  const handleViewFullMenu = () => {
    window.open('https://online.fliphtml5.com/aefsz/znpn/', '_blank');
  };

  const ItemModal = ({ item }: { item: MenuItem }) => {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedItem(null);
          }
        }}
      >
        <div className="modal-overlay absolute inset-0" />
        <div 
          ref={modalRef}
          className="modal-content show bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative h-64 md:h-80">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className={`w-8 h-8 ${item.isVeg ? 'text-green-500' : 'text-red-500'}`}>
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="white"/>
                  <circle cx="12" cy="12" r="6" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {item.category}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 pl-2">
                  {item.longDescription || item.description}
                </p>
              </div>

              {item.ingredients && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.allergens && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Allergens</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.allergens.map((allergen, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                {item.reviews && item.reviews.length > 0 ? (
                  <div className="reviews-section space-y-4">
                    {item.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pl-2 pr-2 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">{review.userName}</p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-0">
                <div className="flex items-center gap-4">
                  {item.hasPortions && (
                    <select
                      value={selectedPortions[item.id] ? 'half' : 'full'}
                      onChange={(e) => setSelectedPortions({
                        ...selectedPortions,
                        [item.id]: e.target.value === 'half'
                      })}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      <option value="full">Full - ₹{item.price.toFixed(2)}</option>
                      <option value="half">Half - ₹{(item.price * 0.5).toFixed(2)}</option>
                    </select>
                  )}
                  {item.hasQuantity && (
                    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">
                        {selectedQuantities[item.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {!item.hasPortions && !item.hasQuantity && (
                    <span className="text-xl font-semibold">
                      ₹{item.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(item);
                    setSelectedItem(null);
                  }}
                  className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {notification.show && (
        <div className="fixed top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <span>{notification.item} has been added to your cart</span>
          <button onClick={() => setNotification({ show: false, item: '' })} className="text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Our Specialties</h1>
      
      <div className="relative mb-6" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, category, or description..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyPress={handleKeyPress}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {searchQuery && (
            <button
              onClick={clearSearchQuery}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {showSuggestions && (searchQuery || searchHistory.length > 0) && (
          <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            {searchQuery && suggestions.length > 0 && (
              <div className="p-2">
                <div className="text-xs text-gray-500 px-2 py-1">Suggestions</div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={`suggestion-${index}`}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {!searchQuery && searchHistory.length > 0 && (
              <div className="p-2">
                <div className="text-xs text-gray-500 px-2 py-1">Recent Searches</div>
                {searchHistory.map((term, index) => (
                  <div
                    key={`history-${index}`}
                    className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    <button
                      onClick={() => handleSearch(term)}
                      className="flex-1 text-left flex items-center"
                    >
                      <Search className="w-4 h-4 text-gray-400 mr-2" />
                      {term}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromHistory(term);
                      }}
                      className="p-1 hover:bg-gray-200 rounded-full"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="md:hidden flex items-center gap-2 mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex-1 bg-gray-900 text-white px-2 py-2 rounded-lg flex items-center justify-center"
        >
          <SlidersHorizontal className="w-5 h-5 mr-1" />
          <span>Filters</span>
        </button>

        <button
          onClick={handleViewFullMenu}
          className="flex-1 bg-gray-900 text-white px-2 py-2 rounded-lg flex items-center justify-center"
        >
          <MenuSquare className="w-5 h-5 mr-1" />
          <span>Menu</span>
        </button>
        
        <button
          onClick={() => setIsVegOnly(!isVegOnly)}
          className="relative h-10 w-28 rounded-full transition-all duration-500 ease-in-out focus:outline-none"
          style={{
            backgroundColor: isVegOnly ? '#22c55e' : '#dc2626'
          }}
        >
          <span 
            className="absolute inset-0 flex items-center text-xs font-medium text-white transition-all duration-500 ease-in-out"
            style={{
              paddingLeft: isVegOnly ? '24px' : '12px',
              paddingRight: isVegOnly ? '12px' : '20px',
              justifyContent: isVegOnly ? 'flex-start' : 'flex-end'
            }}
          >
            {isVegOnly ? 'Veg' : 'Non-Veg'}
          </span>
          <div
            className="absolute top-1 h-8 w-8 transform rounded-full bg-white shadow-md transition-all duration-500 ease-in-out"
            style={{
              left: isVegOnly ? 'calc(100% - 37px)' : '5px'
            }}
          />
        </button>
      </div>

      <div className="hidden md:flex mb-6 md:mb-8 gap-4 items-center justify-between">
        <div className="flex gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters & Sort</span>
            <ChevronDown className={`w-5 h-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <button
            onClick={handleViewFullMenu}
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <MenuSquare className="w-5 h-5" />
            <span>View Full Menu</span>
          </button>
        </div>

        <button
          onClick={() => setIsVegOnly(!isVegOnly)}
          className="relative h-10 w-28 rounded-full transition-all duration-500 ease-in-out focus:outline-none"
          style={{
            backgroundColor: isVegOnly ? '#22c55e' : '#dc2626'
          }}
        >
          <span 
            className="absolute inset-0 flex items-center text-xs font-medium text-white transition-all duration-500 ease-in-out"
            style={{
              paddingLeft: isVegOnly ? '26px' : '12px',
              paddingRight: isVegOnly ? '12px' : '20px',
              justifyContent: isVegOnly ? 'flex-start' : 'flex-end'
            }}
          >
            {isVegOnly ? 'Veg' : 'Non-Veg'}
          </span>
          <div
            className="absolute top-1 h-8 w-8 transform rounded-full bg-white shadow-md transition-all duration-500 ease-in-out"
            style={{
              left: isVegOnly ? 'calc(100% - 37px)' : '5px'
            }}
          />
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg space-y-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    category === cat.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceFilter(range.value)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      priceFilter === range.value
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              
              <div className="inline-block min-w-[300px] max-w-[400px]">
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={MAX_PRICE}
                    value={priceRange}
                    onChange={(e) => {
                      setPriceRange(Number(e.target.value));
                      setPriceFilter('none');
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span>Up to ₹{priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="menu-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="menu-card-image w-full h-48 object-cover"
              />
              <div className="menu-card-overlay absolute inset-0 bg-black bg-opacity-10" />
              <div className="absolute top-2 right-2">
                <div className={`w-6 h-6 ${item.isVeg ? 'text-green-500' : 'text-red-500'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="white"/>
                    <circle cx="12" cy="12" r="6" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="menu-card-content p-4 flex flex-col h-[180px] justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  {item.hasPortions && (
                    <select
                      value={selectedPortions[item.id] ? 'half' : 'full'}
                      onChange={(e) => {
                        e.stopPropagation();
                        setSelectedPortions({
                          ...selectedPortions,
                          [item.id]: e.target.value === 'half'
                        });
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      <option value="full">Full - ₹{(item.price).toFixed(2)}</option>
                      <option value="half">Half - ₹{(item.price * 0.5).toFixed(2)}</option>
                    </select>
                  )}
                  {item.hasQuantity && (
                    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, -1);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{selectedQuantities[item.id] || 1}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, 1);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {!item.hasPortions && !item.hasQuantity && (
                    <span className="text-lg font-semibold">₹{item.price.toFixed(2)}</span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="bg-gray-900 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-800 whitespace-nowrap"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="mobile-card bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="flex p-3">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="absolute top-1 right-1">
                  <div className={`w-5 h-5 ${item.isVeg ? 'text-green-500' : 'text-red-500'}`}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="white"/>
                      <circle cx="12" cy="12" r="6" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 ml-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  {item.hasPortions && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPortions(prev => ({
                          ...prev,
                          [item.id]: !prev[item.id]
                        }));
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="text-sm text-gray-600 underline mt-1"
                    >
                      Switch to {selectedPortions[item.id] ? 'Full' : 'Half'}
                    </button>
                  )}
                  {item.hasQuantity && (
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, -1);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{selectedQuantities[item.id] || 1}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, 1);
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  <p className="text-base font-medium text-gray-900 mt-1">
                    ₹{(item.price * (item.hasPortions && selectedPortions[item.id] ? 0.5 : 1)).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="self-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="bg-gray-900 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-800"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No items found matching your search or filters.</p>
          <button
            onClick={() => {
              setCategory('all');
              setPriceRange(MAX_PRICE);
              setSearchQuery('');
              setIsVegOnly(true);
              setPriceFilter('none');
            }}
            className="mt-2 text-gray-900 underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {selectedItem && <ItemModal item={selectedItem} />}
    </div>
  );
}