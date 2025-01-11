import React, { useEffect, useState } from 'react';
import FallingStars from '../components/FallingStars.jsx';
import { FaFolder } from "react-icons/fa6";
import { motion } from 'framer-motion';

const LoadingPage = ({ onLanguageSelect, onStartLoading }) => {
  const [lastLoginDate, setLastLoginDate] = useState('');
  const [terminalCommand, setTerminalCommand] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoadingBar, setShowLoadingBar] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const fullCommand = `node dewerendaPortfolio.js`;

  useEffect(() => {
    const formatDate = () => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const now = new Date();

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      return `Last login: ${day} ${month} ${date} ${hours}:${minutes}:${seconds}`;
    };

    setLastLoginDate(formatDate());
  }, []);

  useEffect(() => {
    if (currentIndex < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTerminalCommand((prev) => prev + fullCommand[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const loadingBarDelay = setTimeout(() => {
        setShowLoadingBar(true);
        onStartLoading();
        setTimeout(() => {
          setShowLoadingBar(false);
          setShowLanguageOptions(true);
        }, 5000); 
      }, 2000);

      return () => clearTimeout(loadingBarDelay);
    }
  }, [currentIndex, fullCommand, onStartLoading]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const springVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const handleLanguageSelect = (lang) => {
    onLanguageSelect(lang);
  };

  return (
    <div className="loading-page">
      <FallingStars />
      <motion.div
        className="terminal-container relative flex flex-col justify-center items-center h-full"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={springVariant}
        transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      >
        <img 
          src="/assets/terminal.png" 
          alt="terminal background" 
          className="terminal-bg" 
        />
        <p className="terminal-head flex items-center space-x-2">
          <FaFolder className="text-blue-400" />
          <span>dewerendajakub-portfolio</span>
        </p>
        <pre className="terminal-text">
          {lastLoginDate && <>{lastLoginDate}<br /></>}
          {lastLoginDate && `dewerenda@MacBook ~ % ${terminalCommand}`}
        </pre>
        {showLoadingBar && (
          <motion.div
            className="absolute bottom-20 w-[50%] h-2 sm:h-3 bg-purple-900 rounded overflow-hidden shadow-md"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={springVariant}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.4 }}
          >
            <div className="h-full bg-gradient-to-r from-purple-500 to-rose-300 animate-loadingBar"></div>
          </motion.div>
        )}
        {showLanguageOptions && (
          <motion.div
            className="flex flex-col items-center space-y-4 mt-10 text-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={springVariant}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.6 }}
          >
            <h2 className="loading-headtext">Choose Language</h2>
            <div className="flex space-x-4">
              <a className="w-fit group">
                <button
                  className="button-anim flex justify-center items-center gap-2 px-6 py-3 text-xl"
                  onClick={() => handleLanguageSelect('en')}
                >
                  <span className="button-a-glow"></span>
                  <img
                    src="/assets/flaga_en.png"
                    alt="English flag"
                    className="relative w-5 h-3"
                  />
                  <span className="relative text-sm">EN</span>
                </button>
              </a>
              <a className="w-fit group">
                <button
                  className="button-anim flex justify-center items-center gap-2 px-6 py-3 text-xl"
                  onClick={() => handleLanguageSelect('pl')}
                >
                  <span className="button-a-glow"></span>
                  <img
                    src="/assets/flaga_pl.png"
                    alt="Polish flag"
                    className="relative w-5 h-3"
                  />
                  <span className="relative text-sm">PL</span>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoadingPage;
