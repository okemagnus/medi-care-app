// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>© 2025 MedInventory. All rights reserved.</p>
//         <div className="social-icons">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebookF />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <p>© 2025 MedInventory. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

