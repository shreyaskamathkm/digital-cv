import { useState, useEffect } from 'react';
import { initializeAnalytics, trackPageView } from './utils/analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    initializeAnalytics();
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div style={{ opacity: 1, transition: 'opacity 1s ease' }}>
      <Navbar />
      <Hero />
      <ResearchInterests />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Awards />
      <Contact />

      <footer style={{
        textAlign: 'center',
        padding: '40px',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        borderTop: '1px solid var(--glass-border)'
      }}>
        <p>&copy; {new Date().getFullYear()} Shreyas Kamath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
