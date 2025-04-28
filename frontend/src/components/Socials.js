import React from "react";
import "../styles.css";

const Socials = () => {
  return (
    <footer className="socials">
      <div className="socials-content">
        <h2>Свяжитесь со мной</h2>
        
        <div className="social-links">
          <a href="https://instagram.com/agabaiii" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
          <a href="https://t.me/agabaiii" target="_blank" rel="noopener noreferrer" className="social-link">
            Telegram
          </a>
          <a href="https://linkedin.com/in/agabaiii" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
        </div>
        
        <div className="email-container">
          <a href="mailto:agabaiaida@gmail.com" className="email">agabaiaida@gmail.com</a>
        </div>
        
        <div className="circular-text-container">
          <div className="circular-text">
            <svg viewBox="0 0 100 100" width="150" height="150">
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
              <text>
                <textPath href="#circle">
                  AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII • AGABAIII •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socials;