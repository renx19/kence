import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner center-links">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#story" onClick={() => setIsOpen(false)}>Story</a></li>
          <li><a href="#details" onClick={() => setIsOpen(false)}>Details</a></li>
           <li><a href="#gifts" onClick={() => setIsOpen(false)}>Gifts</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="#rsvp" onClick={() => setIsOpen(false)}>RSVP</a></li>
           <li><a href="#entourage" onClick={() => setIsOpen(false)}>Entourage</a></li>
        </ul>

        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
