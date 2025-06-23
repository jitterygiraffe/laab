import React from 'react';
import './footer.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import blueStripeMain from './images/blue_stripe.lottie';
import abstractStars from './images/abstract_stars.png';


const Footer = () => {
  return (
   <>  
    <DotLottieReact className="blueStripeMain"
                        src={blueStripeMain}
                        loop
                        autoplay
    />

    <div >
        <img className="abstractStarsMain" src={abstractStars} alt=""/>
    </div>

    <footer className="footer-main">
      <div className="footer-content-main">
        <div className="footer-left-main">
          <div className="footer-one footer-item-main">
            <span className="footer-icon-main">📍</span>
            <p>Sidi Bou Said<br /><strong>Tunisia</strong></p>
          </div>
          <div className="footer-item-main">
            <span className="footer-icon-main">📞</span>
            <p><strong>+216 123456</strong></p>
          </div>
          <div className="footer-item-main">
            <span className="footer-icon-main">✉️</span>
            <p><a href="mailto:support@laab.org"><strong>support@laab.org</strong></a></p>
          </div>
        </div>

        <div className="footer-right-main">
          <h3>About Laab</h3>
          <p id="footer-txt-main">
            Laab is a community-led initiative with one, 
            simple purpose: To build a free, high-quality 
            playground in Sidi Bou Said park. 
          </p>
          <ul className="footer-links-main">
            <li><a href="#home">Home</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="https://www.gofundme.com/f/help-build-the-new-sidi-bou-said-playground?lang=en_US&utm_campaign=man_sharesheet_dash&utm_content=amp10_t1-amp13_c-amp14_t2&utm_medium=customer&utm_source=copy_link&attribution_id=sl%3Ab976d453-7e48-4b13-96b7-0a89310ac81e" target="_blank" rel="noopener noreferrer">Give on GoFundMe</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
