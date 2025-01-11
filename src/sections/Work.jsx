import React from 'react';
import { motion } from 'framer-motion';

const Work = ({texts}) => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="c-space sm:py-20 py-6 relative overflow-hidden"
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="absolute inset-0">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] pointer-events-none"></div>
      </div>

      <div className="flex justify-center items-center h-[500px] relative">
        <div className="circle-w"></div>
        <div className="z-10 absolute">
          <p className="circle-w-text" dangerouslySetInnerHTML={{ __html: texts.my_work }}>
          </p>
        </div>
        <svg
          className="absolute w-[520px] sm:w-[700px] lg:w-[880px] h-auto animate-spin-slow pointer-events-none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M100,100 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
            fill="transparent"
          />
          <text fill="url(#text-gradient)">
            <textPath
              href="#curve"
              startOffset="0%"
              className="work-text-spin-svg neon-text"
            >
              Front-End
            </textPath>
          </text>
          <text fill="url(#text-gradient)">
            <textPath
              href="#curve"
              startOffset="33%"
              className="work-text-spin-svg neon-text"
            >
              Back-End
            </textPath>
          </text>
          <text fill="url(#text-gradient)">
            <textPath
              href="#curve"
              startOffset="66%"
              className="work-text-spin-svg neon-text"
            >
              Full-Stack
            </textPath>
          </text>
          <defs>
            <linearGradient id="text-gradient" gradientTransform="rotate(90)">
              <stop offset="33%" stopColor="#7a6b4b" />
              <stop offset="66%" stopColor="#535353" />
              <stop offset="100%" stopColor="#202020" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.section>
  );
};

export default Work;
