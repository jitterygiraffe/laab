import React from 'react';
import './footer.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import blueStripe from './images/blue_stripe.lottie';


const Footer = () => {
  return (
   <>  
    <DotLottieReact className="blueStripe"
                        src={blueStripe}
                        loop
                        autoplay
            />

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-one footer-item">
            <span className="footer-icon">📍</span>
            <p>Sidi Bou Said<br /><strong>Tunisia</strong></p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <p><strong>+216 123456</strong></p>
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
    </>
  );
};

export default Footer;
