import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
    >
  <IoArrowUpCircleOutline className="text-purple-600 duration-300 hover:text-purple-950 w-12 h-12" />
</button>
  );
};

export default ScrollToTop;
