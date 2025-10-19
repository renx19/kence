import React, { useState } from "react";
import { FaPauseCircle,} from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import "../styles/navbar.css";

interface NavbarProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ audioRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

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

        {/* Music control button */}
        <button className="btn-audio" onClick={toggleAudio}>
          {isPlaying ? <FaPauseCircle /> : <FaCirclePlay />}
        </button>

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
