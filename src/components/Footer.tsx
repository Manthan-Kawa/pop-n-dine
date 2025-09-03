import React from 'react';
import { 
  Facebook, 
  Instagram, 
  GithubIcon, 
  Linkedin, 
  Twitter,
} from 'lucide-react';
import { motion } from 'framer-motion';
import zomato from '../components/Images/zomato.png';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-black text-white pt-12 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First column set */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 pl-4 md:pl-0">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
                <li><a href="/reserve" className="text-gray-400 hover:text-white transition-colors">Reserve</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Second column set */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 pl-4 md:pl-0">
            <div>
              <h3 className="text-xl font-bold mb-4">For Party Orders</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-white hover:text-white transition-colors">Call Us</span><br></br>
                    <a href="tel:+912228781155" className="text-gray-400 hover:text-white transition-colors">+912228781155</a><br></br>
                    <a href="tel:+912228781313" className="text-gray-400 hover:text-white transition-colors">+912228781313</a>
                  </a>
                </li>
                <li>
                  <a href="mailto:shiveshhegde45@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-white">Email Us</span> popndine@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Catering</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Private Events</a></li>
              </ul>
            </div>
          </div>

          {/* Connect With Us - Centered on Mobile */}
          <div className="pl-0 md:pl-0 text-center md:text-left">
  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
  <div className="flex justify-center md:justify-start space-x-4 mb-6">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/popndine/"
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="h-6 w-6" />
    </a>

    {/* Zomato */}
    <a
      href="https://www.zomato.com/mumbai/pop-n-dine-goregaon-west"
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={zomato} // <- put your zomato logo here
        alt="Zomato"
        className="h-6 w-6"
      />
    </a>
  </div>
            <h3 className="text-xl font-bold mb-4">Developers</h3>
            <div className="flex flex-col items-center md:items-start space-y-2.5 md:text-sm">
              {
                [
                  { name: "Manthan Kawa", insta: "https://www.instagram.com/manthan_kawa/", github: "https://github.com/Manthan-Kawa", linkedin: "https://www.linkedin.com/in/manthan-kawa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPQblaAZTSBiTQPVWYfLfSg%3D%3D"},
                  { name: "Shivesh Hegde", insta: "https://www.instagram.com/shivesh_hegde/", github: "https://github.com/shiveshhegde", linkedin: "https://www.linkedin.com/in/shivesh-hegde-b166272b4"},
                  { name: "Bhavya Gada", insta: "https://www.instagram.com/bhavyagada9/", github: "https://github.com/Bhavya-gada9", linkedin: "https://www.linkedin.com/in/bhavya-gada-6132342b3/"}             
                ].map((dev, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-white-600 hover:text-white transition-colorsfont-medium">{dev.name}</span>
                    <a href={dev.insta} className="text-gray-400 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href={dev.github} className="text-gray-400 hover:text-white transition-colors">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href={dev.linkedin} className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</p>
          <p className="mt-2">© 2008-2025 POPNDINE™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;