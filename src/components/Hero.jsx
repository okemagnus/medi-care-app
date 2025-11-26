import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login"); // change to "/signup" if needed
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-container">
      <div className="hero-content">
        <h1>Revolutionizing Healthcare Inventory in Nigeria</h1>
        <p>
          MedInventory is a smart digital platform that helps hospitals, pharmacies, and clinics in Africa manage inventory and supplies effortlessly. Track stock in real-time, get instant alerts, and keep essential medicines available—all in one easy-to-use system.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleGetStarted}>
            Get Started
          </button>

          <button className="secondary-btn" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Healthcare Illustration" />
      </div>
    </section>
  );
}

export default Hero;
