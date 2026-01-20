// import { useContext } from "react";
// import "../styles/HomePage.css";
// import { ThemeContext } from "../contexts/ThemeContext";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero"
// import About from "../components/About"
// import Services from "../components/Services"
// import Contact from "../components/Contact"
// import Footer from "../components/Footer"

// function HomePage() {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <div className={`home-wrapper ${theme}`}>
//         <Navbar />
//         <Hero />
//         <About />
//         <Services />
//         <Contact />
//         <Footer />
//       </div>
//   );
// }

// export default HomePage;



import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/HomePage.css";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  return (
    <div className={`home-wrapper ${theme}`}>
      <Navbar isAuthenticated={!!user} />
      <Hero isAuthenticated={!!user} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;

