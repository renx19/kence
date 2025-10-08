import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Invitation from "./sections/invitation";
import Hero from "./sections/hero";
import Story from "./sections/story";
import Details from "./sections/details";
import Rsvp from "./sections/rsvp";
import song from "./assets/song.mp3"; // import audio

import './styles/global.css'

const App: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  };

  return (
    <>
      <Navbar />

      {!opened && <Invitation onOpen={handleOpen} />}

      {opened && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Story />
                <Details />
                <Rsvp />
              </>
            }
          />
        </Routes>
      )}

      {opened && <Footer />}

      {/* Audio stays mounted regardless */}
      <audio ref={audioRef} src={song} loop />
    </>
  );
};

export default App;
