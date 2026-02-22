import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import LandingAnimation from './components/LandingAnimation';
import BackToTop from './components/BackToTop';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Landing scroll animation */}
      <LandingAnimation onComplete={handleIntroComplete} />

      {/* Existing portfolio with semantic landmarks */}
      <div className="app-container">
        <TargetCursor targetSelector=".btn, .glass-card" />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <footer>
          <Contact />
        </footer>
        <BackToTop />
      </div>
    </>
  );
}

export default App;
