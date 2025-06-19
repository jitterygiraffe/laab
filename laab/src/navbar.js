import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'FR' : 'EN'));
  };

  return (
    <nav id="nav" className="navbar">
      <div className="navbar-inner">
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact-us">Contact Us</a>
        <a href="#donate" id="donate-btn">Donate Now</a>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
