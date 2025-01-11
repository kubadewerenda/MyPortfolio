import React, { Suspense } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Environment } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Computer from '../components/Computer';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import { motion } from "framer-motion";

const Projects = ({texts, myProjects, onCanvasLoaded }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 440 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const projectsCount = myProjects.length;

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="c-space sm:py-10 py-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <motion.p
                className="section-headtext"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariant}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                {texts.my_projects}
            </motion.p>
            <motion.div
                className="grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-6 gap-5 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariant}
                transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            >
                <motion.div
                    className="about-bg-light px-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                    transition={{ delay: isMobile ? 0.0 : 0.4, duration: 1.2, ease: 'easeOut' }}
                >
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src={"/assets/projects-bg.png"}
                            alt="background"
                            className="w-full h-full object-cover rounded-lg z-0 transform scale-x-[-1]"
                        />
                    </div>
                    <div className="backdrop-filter backdrop-blur-3xl w-fit rounded-lg relative top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-700 via-rose-400 to-purple-500 opacity-70 blur-lg animate-pulse"></div>
                        <img
                            src={"/assets/logo_d.png"}
                            alt="logo"
                            className="relative w-12 h-12 p-1 shadow-[0_4px_20px_rgba(168,85,247,0.7),0_8px_40px_rgba(236,72,153,0.5)] rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col gap-5 my-5">
                        <motion.p
                            className="relative content-headtext_projects"
                            variants={fadeInVariant}
                        >
                            {currentProject.title}
                        </motion.p>
                        <motion.p
                            className="relative text-lg content-subtext"
                            variants={fadeInVariant}
                            transition={{ delay: 0.5 }}
                        >
                            {currentProject.desc}
                        </motion.p>
                        <motion.p
                            className="relative text-lg content-subtext"
                            variants={fadeInVariant}
                            transition={{ delay: 0.6 }}
                        >
                            {currentProject.subdesc}
                        </motion.p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5 pb-10">
                        <motion.div
                            className="flex items-center gap-3"
                            variants={fadeInVariant}
                            transition={{ delay: 0.7 }}
                        >
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </motion.div>
                        <motion.a
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                            className="relative flex items-center gap-2 cursor-pointer text-gray-600 duration-200 hover:text-gray-500 hover:scale-105"
                            variants={fadeInVariant}
                            transition={{ delay: 0.8 }}
                        >
                            <p>Code</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </motion.a>
                    </div>
                    <div className="flex mt-7">
                        <button
                            className="arrow-btn absolute left-0 bottom-0 transform -translate-y-1/2 ml-5"
                            onClick={() => handleNavigation('previous')}
                        >
                            <img src="/assets/left-arrow.png" alt="arrow-left" className="w-4 h-4" />
                        </button>
                        <button
                            className="arrow-btn absolute right-0 bottom-0 transform -translate-y-1/2 mr-5"
                            onClick={() => handleNavigation('next')}
                        >
                            <img src="/assets/right-arrow.png" alt="arrow-right" className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="sm:h-[550px] h-[500px] bg-comp overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                    transition={{ delay: isMobile ? 0.0 : 0.9, duration: 1.2, ease: 'easeOut' }}
                >
                    <div className="container w-full h-full">
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} />
                            <Environment
                                files="/textures/hdr/studio_light.hdr"
                                background={false}
                            />
                            <Suspense fallback={<CanvasLoader onLoaded={onCanvasLoaded} />}>
                                <group
                                    scale={sizes.compScale}
                                    position={sizes.compPosition}
                                    rotation={[0, -1.8, 0]}
                                >
                                    <Computer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                            <OrbitControls
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={isMobile ? Math.PI / 2 : 0}
                                minAzimuthAngle={isMobile ? -0.5 : -Infinity}
                                maxAzimuthAngle={isMobile ? 0.5 : Infinity}
                                enableZoom={false}
                            />
                        </Canvas>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
