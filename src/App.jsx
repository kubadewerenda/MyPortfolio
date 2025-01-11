import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Clients from './sections/Clients.jsx';
import Work from './sections/Work.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import LoadingPage from './sections/LoadingPage.jsx';
import FallingStars from './components/FallingStars.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import NeonCursor from './components/NeonCursor.jsx';

import { texts as plTexts, myProjects as plProjects, clientReviews as plReviews } from './constants/pl';
import { texts as enTexts, myProjects as enProjects, clientReviews as enReviews } from './constants/en';

const App = () => {
  const [canvasStatus, setCanvasStatus] = useState([true, true, true]);
  const [languageSelected, setLanguageSelected] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showPage, setShowPage] = useState(true);
  const [language, setLanguage] = useState('pl');

  const texts = language === 'pl' ? plTexts : enTexts;
  const myProjects = language === 'pl' ? plProjects : enProjects;
  const clientReviews = language === 'pl' ? plReviews : enReviews;

  const handleCanvasLoaded = (index) => {
    setCanvasStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = true;
      return updatedStatus;
    });
  };

  const allLoaded = canvasStatus.every((status) => status);

  useEffect(() => {
    if (allLoaded && languageSelected) {
      setShowTransition(true); 

      const showPageTimeout = setTimeout(() => {
        setShowPage(false);
      }, 20);

      const transitionTimeout = setTimeout(() => {
        setShowTransition(false);
        setStartLoading(true);
      }, 2000);
  
      return () => {
        clearTimeout(showPageTimeout);
        clearTimeout(transitionTimeout);
      };
    }
  }, [allLoaded, languageSelected]);
  

  return (
    <ErrorBoundary>
      <NeonCursor />
      <div className="relative">
        {(!allLoaded || !languageSelected || showPage) &&  (
          <LoadingPage
            onLanguageSelect={(lang) => {
              setLanguage(lang)
              setLanguageSelected(true)
            }}
            onStartLoading={() => setStartLoading(true)}
          />
        )}
          <main
          className={`max-w-7xl mx-auto ${!startLoading ? 'hidden' : ''}`}
          >
          {showTransition && (
          <div className="fixed inset-0 z-[9999] bg-black animate-transitionEffect"></div>
          )}
          {allLoaded && languageSelected && !showPage && <FallingStars />}
          <Navbar />
          <Hero texts={texts.hero} onCanvasLoaded={() => handleCanvasLoaded(0)} onAllLoaded={allLoaded} onLanguageSelected={languageSelected} />
          <About texts={texts.about} onCanvasLoaded={() => handleCanvasLoaded(1)} />
          <Projects texts={texts.projects} myProjects={myProjects} onCanvasLoaded={() => handleCanvasLoaded(2)} />
          <Clients texts={texts.clients} clientReviews={clientReviews}/>
          <Work texts={texts.work}/>
          <Contact texts={texts.contact}/>
          <Footer />
          <ScrollToTop />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
