import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const updateUnread = () => {
      const stored = JSON.parse(localStorage.getItem("alerts")) || [];
      const count = stored.filter((alert) => alert.read === false).length;
      setUnreadCount(count);
    };

    updateUnread();

    // Listen for updates across pages
    window.addEventListener("storage", updateUnread);

    return () => window.removeEventListener("storage", updateUnread);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${theme}`}>
      <ul>
        <li className={isActive("/") ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={isActive("/dashboard") ? "active" : ""}><Link to="/dashboard">Dashboard</Link></li>
        <li className={isActive("/inventory") ? "active" : ""}><Link to="/inventory">Inventory</Link></li>
        <li className={isActive("/drug-check") ? "active" : ""}><Link to="/drug-check">Drug Check</Link></li>
        <li className={isActive("/database") ? "active" : ""}><Link to="/database">Database</Link></li>
        
        <li className={isActive("/alerts") ? "active" : ""}>
          <Link to="/alerts">
            Notifications
            {unreadCount > 0 && (
              <span className="alert-badge">{unreadCount}</span>
            )}
          </Link></li>

        {user ? (
          <li className={isActive("/logout") ? "active" : ""}><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
        ) : (
          <li className={isActive("/login") ? "active" : ""}><Link to="/login">Login</Link></li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
