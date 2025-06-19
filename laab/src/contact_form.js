import React, { useState } from 'react';
import './contact.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ThankYou from './images/thank_you.lottie';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.get('name')) newErrors.name = 'Name is required';
    if (!data.get('email')) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.get('email'))) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.get('message')) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear any previous errors

    fetch('/', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => alert('Something went wrong! Please try again.'));
  };

  if (submitted) {
    return (
      <div className="success-animation" id="contact-us">
        <DotLottieReact
          src={ThankYou}
          autoplay
          loop={false}
          style={{ width: '300px', height: '300px', margin: 'auto' }}
        />
        <h2 style={{ textAlign: 'center', color: '#2563eb' }}>
          Thank you! Your message has been sent.
        </h2>
      </div>
    );
  }

  return (
    <div id="contact-us">
      <section className="contact-container">
        <div className="contact-left">
          <h2 id="contact-title">Let's Chat</h2>
          <p id="contact-txt">
            This project is designed to engage the community 
            around it, to build and strengthen
            individual community members’ sense of 
            ownership and participation in the 
            care of the playground.
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
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <input type="text" name="name" placeholder="Name *" required />
            {errors.name && <span className="error">{errors.name}</span>}

            <input type="email" name="email" placeholder="Email *" required />
            {errors.email && <span className="error">{errors.email}</span>}

            <input type="text" name="company" placeholder="Company" />
            <input type="text" name="phone" placeholder="Phone" />

            <textarea name="message" placeholder="Message" rows="5" />
            {errors.message && <span className="error">{errors.message}</span>}

            <button id="contact-btn" type="submit">Contact Us</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
