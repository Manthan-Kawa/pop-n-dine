import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Cart from './pages/Cart';
import ProfileUpdate from './pages/ProfileUpdate';
import Addresses from './pages/Addresses';
import Reservations from './pages/Reservations';
import Orders from './pages/Orders';
import Contactus from './pages/Contactus';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add/remove no-scroll class on body when cart opens/closes
  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isCartOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfileUpdate />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>

          {/* Sliding Cart */}
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </div>
    </Router>
  );
}

export default App;