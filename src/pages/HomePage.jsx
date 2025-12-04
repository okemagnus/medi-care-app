import { useContext } from "react";
import "../styles/HomePage.css";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`home-wrapper ${theme}`}>
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
