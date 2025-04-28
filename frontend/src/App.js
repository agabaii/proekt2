// App.js
import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import MyStory from './components/MyStory';
import Notes from './components/Notes';
import Moments from './components/Moments';
import Header from './components/Header';
import VideosComponent from './components/VideosComponent';
import Socials from './components/Socials';
import About from './components/About';
import Thoughts from './components/Thoughts';
import './styles.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Animate sections on scroll
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <div className="app-container">
      <Header scrolled={scrolled} />
      <Main />
      <About />
      <VideosComponent />
      <Thoughts />
      <MyStory />
      <Notes />
      <Moments />
      <Socials />
    </div>
  );
}

export default App;