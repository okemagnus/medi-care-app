import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./../styles/Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className={`navbar ${theme}`}>
      <h1 className="logo">Medinventory</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>

        {user ? (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li><Link to="/login">Sign Up / Login</Link></li>
        )}

        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
