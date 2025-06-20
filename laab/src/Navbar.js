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
        <a href="https://www.gofundme.com/f/help-build-the-new-sidi-bou-said-playground?lang=en_US&utm_campaign=man_sharesheet_dash&utm_content=amp10_t1-amp13_c-amp14_t2&utm_medium=customer&utm_source=copy_link&attribution_id=sl%3Ab976d453-7e48-4b13-96b7-0a89310ac81e" 
           id="donate-btn"
           target="_blank" 
           rel="noopener noreferrer"
           >Donate Now</a>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
