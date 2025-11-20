import React from "react";
import heroImage from "../assets/heroImage.png"

function Hero () {
    return(
        <section id="home" className="home-container">
                <div className="hero-content">
                  <h1>Revolutionizing Healthcare Access in Nigeria 🇳🇬</h1>
                  <p>
                    MediCare helps hospitals, pharmacies, and patients manage healthcare
                    data efficiently — from inventory to patient care.
                  </p>
                  <div className="hero-buttons">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Learn More</button>
                  </div>
                </div>
        
                <div className="hero-image">
                  <img src={heroImage} alt="Healthcare Illustration" />
                </div>
              </section>
    )
}

export default Hero;