import React from "react";
import "../styles/HomePage.css";
// import heroImage from "../assets/heroImage.png"; // optional image
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div className="home-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
  );
}

export default HomePage;
