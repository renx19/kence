import React, { useRef, useEffect } from "react";

import Hero from "../sections/hero";
import Story from "../sections/story";
import Details from "../sections/details";
import Gallery from "../sections/gallery";
import Rsvp from "../sections/rsvp";
import Gifts from '../sections/gifts'
import song from "../assets/wedding-song1.mp3";
import Entourage from "../sections/entourage";

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  }, []);

  return (
    <>

      <div className="main-wrapper">
        <Hero />
        <Story />
        <Details />
        <Gifts />
        <Gallery />
        <Rsvp />
        <Entourage />
        
      </div>


      <audio ref={audioRef} src={song} loop />
    </>
  );
};

export default Home;
