import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Invitation from "./sections/invitation";
import Hero from "./sections/hero";
import Story from "./sections/story";
import Details from "./sections/details";
import Gallery from "./sections/gallery";
import Rsvp from "./sections/rsvp";
import song from "./assets/song.mp3";

import './styles/global.css'

const App: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true); // overlay state
  const audioRef = useRef<HTMLAudioElement>(null);

  // initial load
  useEffect(() => {
    // simulate initial page render
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setLoading(true); // show overlay during transition
    setTimeout(() => {
      setOpened(true); // show main page after invitation animation
      setLoading(false); // hide overlay
      if (audioRef.current) {
        audioRef.current.volume = 0.8;
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      }
    }, 1000); // match invitation transition duration
  };

  return (
    <>
      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="heart-spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      )}

      {/* Invitation */}
      {!opened && <Invitation onOpen={handleOpen} />}

      {/* Main sections pre-mounted but hidden until invitation opens */}
      <div
        className="main-content"
        style={{
          opacity: opened ? 1 : 0,
          pointerEvents: opened ? "auto" : "none",
          transition: "opacity 0.8s ease",
        }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Story />
                <Details />
                <Gallery />
                <Rsvp />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>

      {/* Audio */}
      <audio ref={audioRef} src={song} loop />
    </>


  );
};

export default App;
