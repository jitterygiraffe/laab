import React from 'react';
import './contact.css';
import { DotLottie } from '@lottiefiles/dotlottie-react';
import ThankYou from './thank_you.lottie';

const ContactForm = () => {
  return (
    <div id="contact-us">
      <section className="contact-container">
        <div className="contact-left">
          <h2 id="contact-title">Let's Chat</h2>
          <p id="contact-txt">
            This project is designed to engage the community 
            around it, to build and strengthen
            individual community members’ sense of 
            ownership and participation in the care 
            of the playground.
          </p>
          <p id="contact-txt">
            For this reason, we are always thrilled to 
            hear from our community members! Don’t 
            hesitate to reach out to us in case of any 
            question, suggestion, or words of encouragement.
            We truly look forward to hearing from you!
          </p>
        </div>

        <div className="contact-right">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="Email *" required />
            <input type="text" name="company" placeholder="Company" />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea name="message" placeholder="Message" rows="5"></textarea>
            <button id="contact-btn" type="submit">Contact Us</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
