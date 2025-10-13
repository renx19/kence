import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import "../styles/hero.css";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const WEDDING_DATE = new Date("2025-11-22T15:00:00");

// 📝 Typewriter with re-trigger on scroll
const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;
    setDisplayedText("");

    const startDelay = 1600;
    const startTyping = () => {
      intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i === text.length) clearInterval(intervalId);
      }, speed);
    };

    const timeoutId = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, trigger]);

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onViewportEnter={() => setTrigger((prev) => prev + 1)}
    >
      {displayedText}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ⏳ Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <Parallax speed={-20} className="hero-parallax">
        <img src="/FLO07687.jpeg" alt="Hero" className="hero-image" />

        <div className="hero-content">
          {/* 🖋 Animated couple name with delayed typing */}
          <Typewriter
            text="Kenneth & Florence"
            className="couple-names lavishly-yours-regular"
            speed={100}
          />

          {/* ✨ Fade-in for date and location */}
          <motion.div
            className="hero-text-group"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="wedding-date"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              November 22, 2025
            </motion.p>
            <motion.p
              className="wedding-location"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Don Jose Heights – The Atrium, Quezon City
            </motion.p>
          </motion.div>

          {/* ⏳ Countdown */}
          <div className="countdown">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <motion.div
                key={unit}
                className="countdown-box"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              >
                <div className="count">
                  {timeLeft[unit as keyof typeof timeLeft]}
                </div>
                <div className="label">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;
