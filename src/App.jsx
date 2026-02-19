import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import LandingAnimation from './components/LandingAnimation';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {/* Landing scroll animation — completely separate from the portfolio */}
      <LandingAnimation onComplete={handleIntroComplete} />

      {/* Existing portfolio — untouched, renders naturally after the scroll container */}
      <div className="app-container">
        <TargetCursor targetSelector=".btn, .glass-card" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
