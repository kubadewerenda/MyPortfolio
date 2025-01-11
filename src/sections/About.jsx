import React, { Suspense } from 'react';
import Iphone from '../components/Iphone';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Environment } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdDownloading } from "react-icons/md";
import { SiPython, SiCplusplus, SiJavascript, SiReact, SiHtml5, SiCss3, SiWordpress, SiMysql, SiC } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

const About = ({ texts, onCanvasLoaded }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kubadewerendaa@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const skills = [
    { icon: <SiPython className="text-3xl text-gray-200" />, level: 90 },
    { icon: <SiCplusplus className="text-3xl text-gray-200" />, level: 60 },
    { icon: <SiC className="text-3xl text-gray-200" />, level: 65 },
    { icon: <SiJavascript className="text-3xl text-gray-200" />, level: 80 },
    { icon: <DiJava className="text-3xl text-gray-200" />, level: 55 },
    { icon: <SiReact className="text-3xl text-gray-200" />, level: 85 },
    { icon: <SiHtml5 className="text-3xl text-gray-200" />, level: 85 },
    { icon: <SiCss3 className="text-3xl text-gray-200" />, level: 80 },
    { icon: <SiWordpress className="text-3xl text-gray-200" />, level: 75 },
    { icon: <SiMysql className="text-3xl text-gray-200" />, level: 65 },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="c-space sm:py-10 py-6" id='about'>
      <motion.div
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div 
          className="col-span-1 row-span-1 xl:row-span-6 sm:h-[550px] h-[500px] bg-phone overflow-hidden" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant} 
          transition={{ delay: isMobile ? 0.1 : 0.4, duration: 1.2, ease: 'easeOut' }}
        >
          <div className="container w-full h-full">
            <Canvas>
              <ambientLight intensity={0.1} />
              <directionalLight position={[10, 10, 5]} />
              <Environment files="/textures/hdr/studio_light.hdr" background={false} />
              <Center>
                <Suspense fallback={<CanvasLoader onLoaded={onCanvasLoaded} />}>
                  <group scale={sizes.phoneScale} position={[0, 0, 0]} rotation={[0, 2.2, 0]}>
                    <Iphone />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </motion.div>

        <motion.div 
          className="hidden xl:flex row-span-6 justify-center items-center relative h-full" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant} 
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="led-line_pio"></div>
        </motion.div>

        <motion.div 
          className="flex sm:hidden col-span-1 justify-center items-center relative h-full" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant} 
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="led-line_poz"></div>
        </motion.div>

        <motion.div 
          className="col-span-1 xl:row-span-6 flex w-full flex-col justify-between about-bg-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInVariant} 
          transition={{ delay: isMobile ? 0.0 : 0.4, duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative z-10">
            <h2 className="mb-4 content-headtext">{texts.about_me}</h2>
            <p className="content-subtext">
              {texts.ab_text_1}
              <br />
              <br />
              {texts.ab_text_2}
            </p>
          </div>
          <div className="flex flex-wrap sd:flex-nowrap justify-center items-center gap-4 mt-5 relative z-10">
            <a href="/cv/CV_PL_DewerendaJakub.pdf" download className="w-fit group">
              <button className="button-anim flex justify-center items-center gap-2 px-6 py-3 text-xl">
                <span className="button-a-glow"></span>
                <MdDownloading className="icon-btn" />
                <span className="relative text-sm">CV (PL)</span>
              </button>
            </a>
            <a href="/cv/CV_EN_DewerendaJakub.pdf" download className="w-fit group">
              <button className="button-anim flex justify-center items-center gap-2 px-6 py-3 text-xl">
                <span className="button-a-glow"></span>
                <MdDownloading className="icon-btn" />
                <span className="relative text-sm">CV (EN)</span>
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-1 xl:grid-cols-2 gap-10 h-full mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div className="about-bg-light p-8 z-0" 
          transition={{ duration: 1.2, ease: 'easeOut' }}
          variants={fadeInVariant}
        >
          <div className="relative z-10">
            <h2 className="content-headtext">{texts.my_skills}</h2>
          </div>
          <div className="grid xl:grid-cols-2 gap-8 mt-5">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">{skill.icon}</span>
                  <span className="text-sm font-light text-gray-400">{skill.level}%</span>
                </div>
                <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-700 via-rose-300 to-rose-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-10" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div className="about-bg-light p-8 flex flex-col items-center justify-center" 
            variants={fadeInVariant} 
            transition={{ delay: isMobile ? 0.0 : 0.3, duration: 1.2, ease: 'easeOut'}}>
            <div className="absolute inset-0 opacity-60 z-0">
              <img
                src={"/assets/grid3.png"}
                alt="background"
                className="w-full sm:h-full h-1/2 object-cover rounded-lg"
              />
            </div>
            <div className="relative z-10">
              <h2 className="content-headtext mb-4">{texts.interests}</h2>
              <p className="content-subtext">
                {texts.i_text_1}
                <br />
                <br />
                {texts.i_text_2}
              </p>
            </div>
          </motion.div>

          <motion.div className="about-bg-light p-8 flex flex-col items-center justify-center" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant} 
            transition={{ delay: isMobile ? 0.0 : 0.6, duration: 1.2, ease: 'easeOut'}}
          >
            <div className="absolute w-full h-full flex justify-center items-start opacity-60 z-0">
              <img
                src="/assets/grid4.png"
                alt="background"
                className="w-[80%] h-auto object-contain translate-y-1"
              />
            </div>
            <div className="relative z-10">
              <p className="content-headtext text-center mb-4 z-10">{texts.contact_me}</p>
            </div>
            <div className="copy-container flex flex-col items-center z-10">
              <div className="flex items-center gap-4 mb-4 group">
                <button
                  onClick={handleCopy}
                  className="button-anim px-6"
                >
                  <span className="button-a-glow"></span>
                  <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="relative h-5 w-5 z-10" />
                </button>
                <p className="copy-text">kubadewerendaa@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
