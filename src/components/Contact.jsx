import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Contact() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [fade, setFade] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder === "Full Name"
        ? "fullName"
        : e.target.placeholder === "Email Address"
        ? "email"
        : "message"]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const existing = JSON.parse(localStorage.getItem("alerts")) || [];

const newMessage = {
  fullName: formData.fullName,
  email: formData.email,
  message: formData.message,
  time: new Date().toLocaleString(),
  read: false
};

existing.push(newMessage);
localStorage.setItem("alerts", JSON.stringify(existing));


  // Show on-screen success box
  setSubmittedMessage(newMessage);
  setFade(false);

  // Clear form
  setFormData({ fullName: "", email: "", message: "" });
};


  // Handle fade-out effect
  useEffect(() => {
    if (submittedMessage) {
      const fadeTimer = setTimeout(() => setFade(true), 3000); // Start fade after 3s
      const removeTimer = setTimeout(() => {
        setSubmittedMessage(null);
        setFade(false);
      }, 5000); // Remove box completely after 5s

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [submittedMessage]);

  return (
    <section id="contact" className={`contact-section ${theme}`}>
      <h2>Contact Us</h2>
      <p>Have questions or want to collaborate? Reach out to us below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>

      {submittedMessage && (
        <div className={`submitted-message-box ${fade ? "fade-out" : ""}`}>
          <h3>Message Sent Successfully!</h3>
          <p><strong>Name:</strong> {submittedMessage.fullName}</p>
          <p><strong>Email:</strong> {submittedMessage.email}</p>
          <p><strong>Message:</strong> {submittedMessage.message}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
