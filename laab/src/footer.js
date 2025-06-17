import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-item">
            <span className="footer-icon">📍</span>
            <p>21 Revolution Street<br /><strong>Paris, France</strong></p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <p><strong>+1 555 123456</strong></p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">✉️</span>
            <p><a href="mailto:support@laab.org"><strong>support@laab.org</strong></a></p>
          </div>
        </div>

        <div className="footer-right">
          <h3>About Laab</h3>
          <p>
            Laab is a grassroots initiative to bring safe, inclusive, and creative
            spaces to our community. This project is 100% volunteer-run and community-funded.
          </p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#meet-the-park">Meet the Park</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#donate">Donate Now</a></li>
            <li><a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer">Give on GoFundMe</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
