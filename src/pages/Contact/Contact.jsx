import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form>
        <div className="contact-content">
          <div>
            <div className="contact-block">
              <span>Name:</span>
              <input
                required
                type="text"
                placeholder="Enter your name here..."
              />
            </div>
            <div className="contact-block">
              <span>Email:</span>
              <input
                required
                type="email"
                placeholder="Enter your email here..."
              />
            </div>
          </div>
          <div className="contact-block">
            <span>Message...</span>
            <textarea
              cols="50"
              rows="10"
              placeholder="Enter the message Here..."
            ></textarea>
          </div>
        </div>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
