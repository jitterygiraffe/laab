import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'FR' : 'EN'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact Us</a>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
        <a href="#donate" className="donate-btn">Donate Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
