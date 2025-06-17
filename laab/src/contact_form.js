import React from 'react';
import './contact.css';

const ContactForm = () => {
  return (
    <section className="contact-container">
      <div className="contact-left">
        <h2 id="contact-title">Let's Chat</h2>
        <p id="contact-txt">
          This project is designed to engage the 
          community around it, to build and strengthen 
          individual community members’ sense of 
          ownership and participation in the care of the playground. 
        </p>
        <p id="contact-txt">
          For this reason, we are always excited to hear from 
          our community members! Whether you have a question, 
          suggestion, or food for thought, please don't hesitate 
          to reach out to us.
        </p>
      </div>

      <div className="contact-right">
        
        <form className="contact-form">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button id='contact-btn' type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
