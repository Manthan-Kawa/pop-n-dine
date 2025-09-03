import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import styled from '@emotion/styled';
import Footer from '../components/Footer';

const AnimatedContainer = styled.div`
  animation: fadeIn 0.8s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SlideDown = styled.div`
  animation: slideDown 0.8s ease-out forwards;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MainContent = styled.div`
  margin-bottom: 50px; /* Adjust this value as needed */
`;

const LeftPaddedContent = styled.div`
  padding-left: 20px; /* Padding for mobile view */
  padding-right: 20px; /* Padding for mobile view */
  padding-top: 20px; /* Padding for mobile view */
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-left: 45px; /* Padding for desktop view */
    padding-right: 0; /* Remove right padding for desktop view */
    padding-top: 40px; /* Padding for desktop view */
  }
`;

const RightPaddedContent = styled.div`
  padding-right: 20px; /* Padding for mobile view */
  padding-left: 20px; /* Padding for mobile view */
  padding-top: 10px; /* Padding for mobile view */

  @media (min-width: 768px) {
    padding-right: 45px; /* Padding for desktop view */
    padding-left: 0; /* Remove left padding for desktop view */
    padding-top: 40px; /* Padding for desktop view */
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Force a reflow to fix responsiveness issue
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }, []);

  return (
    <div className={`w-full mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <AnimatedContainer>
        <MainContent>
          <GridContainer>
            <SlideDown>
              <LeftPaddedContent>
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-gray-900 text-center md:text-left">
                    Pop-N-Dine
                  </h1>
                  <p className="text-gray-800 mb-7 text-base sm:text-lg leading-relaxed">
                    Welcome to Pop-N-Dine, where culinary excellence meets warm hospitality. 
                    Established in 2020, we've been serving our community with passion and dedication, 
                    creating memorable dining experiences for our guests.
                  </p>
                
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-gray-700" />
                      <span className="text-sm sm:text-base text-gray-800">
                        Shop No 4, 57/Pagrav, 5/6, Swami Vivekananda Rd near Mahindra Gardens, Goregaon West, Mumbai, Maharashtra 400104
                      </span>
                    </div>
                
                    <div className="flex items-center space-x-3">
                      <Clock className="flex-shrink-0 w-5 h-5 text-gray-700" />
                      <span className="text-sm sm:text-base text-gray-800">
                        Mon-Sun: 12:30 - 3:30 pm | 7pm - 12:30 am
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="flex-shrink-0 w-5 h-5 text-gray-700" />
                      <span className="text-sm sm:text-base text-gray-800">
                        +91 9321772288
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="flex-shrink-0 w-5 h-5 text-gray-700" />
                      <span className="text-sm sm:text-base text-gray-800">
                        shiveshhegde45@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </LeftPaddedContent>
            </SlideDown>
            
            <SlideDown>
              <RightPaddedContent>
                <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6217621598953!2d72.84325747409946!3d19.168027049079218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b653fe618167%3A0x928f906a5609d0e1!2sPop%20N%20Dine!5e0!3m2!1sen!2sin!4v1738005498657!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </RightPaddedContent>
            </SlideDown>   
          </GridContainer>
        </MainContent>
        <Footer />
      </AnimatedContainer>
    </div>
  );
}