import React from "react";
import AboutImage from "../assets/aboutImage.png";

function About () {
    return(
        <section id="about" className="about-section">
        <div className="about-content">
          <h2>About MedInventory</h2>
        <p>
          MedInventory is a comprehensive digital inventory and supply management platform designed to empower hospitals, pharmacies, and clinics across Africa. Our goal is to simplify record-keeping, streamline inventory control, and optimize supply management using modern, easy-to-use technology.
          With MedInventory, healthcare providers can track stock levels in real-time, receive low-stock alerts, and manage procurement efficiently. Our platform reduces errors, prevents shortages, and ensures that essential medicines and supplies are always available when needed.
          Beyond inventory, MedInventory provides actionable insights through analytics dashboards, helping organizations make data-driven decisions to improve operational efficiency and patient care. Whether you are managing a single clinic or multiple facilities, MedInventory brings transparency, accuracy, and convenience to your healthcare supply chain.
        </p>
        </div>

        <div>
          <img src={AboutImage} alt="Dashboard Illustrtion" />
        </div>
      </section>

    )
}

export default About

// MedInventory is a digital inventory and supply management platform designed to support hospitals, pharmacies, and clinics in Africa. Our goal is to simplify record keeping, inventory control, and supply management using modern technology