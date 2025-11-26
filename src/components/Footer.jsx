import React from "react";

function Footer () {
    return(
    <div>
        <footer className="footer">
        <p>© {new Date().getFullYear()} MedInventory HealthTech. All rights reserved.</p>
      </footer>
    </div>
    )
}

export default Footer;