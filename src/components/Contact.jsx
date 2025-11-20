import React from "react";
      
      function Contact () {
          return(
              <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to collaborate? Reach out to us below.</p>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </section>
      
          )
      }
      
export default Contact