import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <aside className="sidebar">
    {/* <h2>Medicare</h2> */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/inventory">Inventory</Link></li>
      <li><Link to="/drug-check">Drug Check</Link></li>
      <li><Link to="/database">Database</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </aside>
)

export default Sidebar

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../styles/Sidebar.css"; // add CSS file below

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const closeSidebar = () => setIsOpen(false);

//   return (
//     <>
//       {/* Burger Icon */}
//       <div className="burger-icon" onClick={toggleSidebar}>
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* Sidebar Drawer */}
//       <aside className={`sidebar ${isOpen ? "open" : ""}`}>
//         <h2>Medicare</h2>
//         <ul>
//           <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
//           <li><Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link></li>
//           <li><Link to="/drug-check" onClick={closeSidebar}>Drug Check</Link></li>
//           <li><Link to="/inventory" onClick={closeSidebar}>Inventory</Link></li>
//           <li><Link to="/login" onClick={closeSidebar}>Login</Link></li>
//         </ul>
//       </aside>

//       {/* Overlay for mobile view */}
//       {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
//     </>
//   );
// };

// export default Sidebar;
