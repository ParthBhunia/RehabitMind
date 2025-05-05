import React from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    
    <div className="contact-container">
      <Navbar />
      <div className="contact-card">
        <h2 className="contact-title">
          Contact us <span role="img" aria-label="email">📧</span>
        </h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name (field required)"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            placeholder="Phone number (field required)"
            required
          />
          <textarea
            rows="4"
            placeholder="Message (field required)"
            required
          />
          <button type="submit">Send message &gt;</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
