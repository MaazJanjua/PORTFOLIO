import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    phone: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a0jqzti',          // ✅ your EmailJS service ID
      'template_ce5r56j',         // ✅ your EmailJS template ID
      formRef.current,
      'K3-DDtkecx6GFWV7y'         // ✅ your EmailJS public key (user ID)
    )
    .then((result) => {
      console.log('✅ Email sent:', result.text);
      setStatusMessage('✅ Form submitted successfully!');
      setStatusType('success');

      // Clear form fields
      setFormData({
        from_name: '',
        user_email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('❌ Email sending failed:', error.text);
      setStatusMessage('❌ Form not submitted. Please try again.');
      setStatusType('error');
    });

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contectheadingdiv">
          <h1 className="contact-heading">CONTACT</h1>
        </div>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
          I'll get back to you as soon as possible.
        </p>

        <div className="partition-bar"></div>

        {statusMessage && (
          <div className={`status-message ${statusType}`}>
            {statusMessage}
          </div>
        )}

        {/* ✅ Final Working Form */}
        <form name="contact" className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Optional: hidden subject field */}
          <input
            type="hidden"
            name="subject"
            value="New message from portfolio contact form"
          />

          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
