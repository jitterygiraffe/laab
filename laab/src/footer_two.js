import React from 'react';
import './footer_2.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import blueStripe from './images/blue_stripe.lottie';
import abstractStars from './images/abstract_stars.png';


const FooterTwo = () => {
  return (
   <>  
    <DotLottieReact className="blueStripe"
                        src={blueStripe}
                        loop
                        autoplay
    />

    <div >
        <img className="abstractStars" src={abstractStars} alt=""/>
    </div>

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
          <p id="footer-txt">
            Laab is a community-led initiative with one, 
            simple purpose: To build a free, high-quality 
            playground in Sidi Bou Said park. 
          </p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer">Give on GoFundMe</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};

export default FooterTwo;
