import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'FR' : 'EN'));
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav id="nav" className="navbar">
      <div className="navbar-inner desktop-menu">
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact-us">Contact Us</a>
        <a href="https://www.gofundme.com/f/help-build-the-new-sidi-bou-said-playground?lang=en_US" 
           id="donate-btn"
           target="_blank" 
           rel="noopener noreferrer">
          Donate Now
        </a>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <span className="close-icon">✕</span> : <span>☰</span>}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-menu-dropdown">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#our-story" onClick={toggleMenu}>Our Story</a>
          <a href="#faqs" onClick={toggleMenu}>FAQs</a>
          <a href="#contact-us" onClick={toggleMenu}>Contact Us</a>
          <a
            href="https://www.gofundme.com/f/help-build-the-new-sidi-bou-said-playground?lang=en_US"
            id="donate-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Donate Now
          </a>
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
