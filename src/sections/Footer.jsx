import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.section
      className="c-space pt-5 pb-10 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div
        className="mb-3 flex justify-center items-center relative w-full h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="led-line_poz"></div>
      </motion.div>

      <motion.div
        className="text-gray-500 flex gap-2 text-center md:text-left font-bungee"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
      >
        <p>Terms & Conditions</p>
        <p>|</p>
        <a href="privacyPolicy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </motion.div>

      <motion.div
        className="flex gap-3 justify-center md:justify-end w-full md:w-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
      >
        <a href="https://www.instagram.com/t0_benny/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </div>
        </a>
        <a href="https://pl.linkedin.com/in/jakub-dewerenda-2b3517300" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="Twitter" className="w-6 h-6" />
          </div>
        </a>
        <a href="https://github.com/kubadewerenda" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
          </div>
        </a>
      </motion.div>

      <motion.p
        className="text-gray-500 text-center w-full font-bungee"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
      >
        &copy; 2025 Dewerenda. All rights reserved
      </motion.p>
    </motion.section>
  );
};

export default Footer;
