import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../sections/hero";
import Story from "../sections/story";
import Details from "../sections/details";
import Gallery from "../sections/gallery";
import Rsvp from "../sections/rsvp";
import Gifts from '../sections/gifts'
import song from "../assets/song.mp3";

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
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Gifts />
      <Gallery />
      <Rsvp />
      <Footer />
      <audio ref={audioRef} src={song} loop />
    </>
  );
};

export default Home;
