import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Star, MessageSquare, ThumbsUp, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '../components/Footer';
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";

// Import background images
import backgroundImage1 from "../pages/Images/Background.jpg";
import backgroundImage2 from "../pages/Images/Background1.jpg";
import backgroundImage3 from "../pages/Images/Background2.jpg";

// Background images array
const backgroundImages = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3
];

interface FeedbackEntry {
  id: string;
  name: string;
  message: string;
  date: string;
  rating: number;
  timestamp?: any; // Firestore timestamp
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  // Background image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fetch feedback from Firestore
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setLoadingFeedback(true);
        const feedbackQuery = query(
          collection(db, "Feedback"),
          orderBy("timestamp", "desc")
        );
        
        const querySnapshot = await getDocs(feedbackQuery);
        const entries: FeedbackEntry[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          entries.push({
            id: doc.id,
            name: data.name,
            message: data.message,
            date: data.date || new Date(data.timestamp?.toDate()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            rating: data.rating,
            timestamp: data.timestamp
          });
        });
        
        setFeedbackEntries(entries);
      } catch (error) {
        console.error("Error fetching feedback: ", error);
      } finally {
        setLoadingFeedback(false);
      }
    };

    fetchFeedback();
  }, []);

  const featuredDishes = [
    {
      name: "Thai Curry",
      description:
        "Thai curry is made with curry paste, coconut milk or water, protein, vegetables, and herbs.",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Chicken Chilli Gravy",
      description:
        "Chicken Chilli Gravy is a spicy, tangy dish made with chicken, bell peppers, onions, and a flavorful sauce of soy sauce, vinegar, and chili sauce.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
    },
    {
      name: "Chicken Biryani",
      description:
        "Chicken Biryani is a fragrant, spiced rice dish layered with tender chicken, aromatic herbs, and cooked with a blend of spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const newFeedback = {
        name,
        message,
        rating,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        timestamp: serverTimestamp()
      };
  
      await addDoc(collection(db, "Feedback"), newFeedback);
      
      // Reset form
      setName("");
      setMessage("");
      setRating(5);
      
      // Show success message
      setFeedbackSubmitted(true);
      
      // Refresh feedback list
      const feedbackQuery = query(
        collection(db, "Feedback"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(feedbackQuery);
      const entries: FeedbackEntry[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        entries.push({
          id: doc.id,
          name: data.name,
          message: data.message,
          date: data.date || new Date(data.timestamp?.toDate()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          rating: data.rating,
          timestamp: data.timestamp
        });
      });
      
      setFeedbackEntries(entries);
      
      // Hide success message after 3 seconds
      setTimeout(() => setFeedbackSubmitted(false), 3000);
    } catch (error) {
      console.error("Error adding feedback: ", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      {/* Hero Section with Slideshow */}
      <div className="relative h-[calc(100vh-4rem)]">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <ChefHat className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Pop-N-Dine</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl px-4">
              Experience culinary excellence with our carefully crafted menu and elegant atmosphere
            </p>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link to="/menu" className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Browse Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <section className="bg-white py-12">
        <motion.div 
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Dishes</h2>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <Star className="w-5 h-5 text-yellow-400 fill-none stroke-current" />
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 lg:hover:-translate-y-5"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                >
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-48 md:h-64 object-cover transform transition-transform duration-500" 
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

{/* Feedback Section */}
<motion.section
  className="bg-gray-50 py-8 px-4 lg:py-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <MessageSquare className="w-12 h-12 mx-auto mb-4 text-[#1e3a8a]" />
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Experience</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We value your feedback and continuously strive to improve our service based on your experiences.
      </p>
    </motion.div>

    <motion.form
      onSubmit={handleSubmitFeedback}
      className="flex flex-col lg:flex-row gap-3"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Left side - Input fields */}
      <div className="lg:w-2/3 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
          required
        />
        <textarea
          placeholder="Share your dining experience with us..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
          required
        ></textarea>
      </div>

      {/* Right side - Rating and Submit */}
      <div className="lg:w-1/3 lg:pl-8 flex flex-col justify-start lg:justify-center items-center space-y-6">
        <div className="flex flex-col items-center space-y-3 w-full">
          <label className="text-gray-700 font-medium">Your Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-7 h-7 ${
                    star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <motion.button
          type="submit"
          className="w-full max-w-xs bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full font-medium text-base hover:bg-[#1e3a8a]/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Feedback
        </motion.button>
      </div>
    </motion.form>

          {/* Feedback Display Slider */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-0 text-center">What Our Guests Say</h3>
            
            {loadingFeedback ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1e3a8a]"></div>
              </div>
            ) : feedbackEntries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No feedback yet. Be the first to share your experience!
              </div>
            ) : (
              <div className="relative px-0 lg:px-16">
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ 
                    clickable: true,
                    el: '.feedback-pagination',
                    type: 'bullets',
                  }}
                  navigation={{
                    prevEl: '.feedback-prev',
                    nextEl: '.feedback-next',
                  }}
                  speed={800}
                  autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={feedbackEntries.length > 1}
                  className="pb-2 pl-3 pr-3 pt-10"
                >
                  {feedbackEntries.map((entry) => (
                    <SwiperSlide key={entry.id}>
                      <motion.div
                        className="bg-white p-6 md:p-8 rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Quote className="w-8 h-8 text-[#1e3a8a] mb-4 mx-auto" />
                        <p className="text-gray-700 mb-6 italic text-lg text-center">"{entry.message}"</p>
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`w-5 h-5 ${
                                index < entry.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                          <span className="font-semibold">{entry.name}</span>
                          <span>•</span>
                          <span>{entry.date}</span>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <div className="hidden lg:block">
                  <button className="feedback-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-gray-50 transition-colors">
                    <ChevronLeft className="w-6 h-6 text-[#1e3a8a]" />
                  </button>
                  <button className="feedback-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-gray-50 transition-colors">
                    <ChevronRight className="w-6 h-6 text-[#1e3a8a]" />
                  </button>
                </div>
                
                {/* Custom Pagination */}
                <div className="feedback-pagination flex justify-center space-x-2 mt-6"></div>
              </div>
            )}
          </motion.div>

          {/* Success Message */}
          <motion.div
            className={`fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 ${
              feedbackSubmitted ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: feedbackSubmitted ? 1 : 0, y: feedbackSubmitted ? 0 : 50 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <ThumbsUp className="w-5 h-5" />
            <span>Thank you for your feedback!</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}