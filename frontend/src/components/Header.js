import React, { useEffect } from "react";
import "../styles.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.header').classList.add('scrolled');
      } else {
        document.querySelector('.header').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo-circle" onClick={() => scrollToSection("Main")}>
        <svg viewBox="0 0 100 100" width="40" height="40">
          <path 
            id="header-circle" 
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
            fill="none"
          />
          <text fontSize="8">
            <textPath href="#header-circle">
              AGABAIII • AGABAIII • AGABAIII 
            </textPath>
          </text>
        </svg>
      </div>
      
      <nav className="nav-wrapper">
        <ul className="nav-list">
          <li onClick={() => scrollToSection("Main")}>Главная</li>
          <li onClick={() => scrollToSection("about")}>Обо мне</li>
          <li onClick={() => scrollToSection("videos-section")}>Влоги</li>
          <li onClick={() => scrollToSection("thoughts-section")}>Мысли Агабай</li>
          <li onClick={() => scrollToSection("MyStory")}>Моя история</li>
          <li onClick={() => scrollToSection("notes")}>Заметки</li>
          <li onClick={() => scrollToSection("Moments")}>Моменты</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;