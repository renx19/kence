import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import "../styles/hero.css";

const WEDDING_DATE = new Date("2025-12-15T00:00:00");

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
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
          {/* Animated Text */}
          <motion.div
            className="hero-text-group"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="couple-names lavishly-yours-regular"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Kenneth & Florence
            </motion.h1>
            <motion.p
              className="wedding-date"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              November 22, 2025
            </motion.p>
            <motion.p
              className="wedding-location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tagaytay, Philippines
            </motion.p>
          </motion.div>

          {/* Countdown */}
          <div className="countdown">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <motion.div
                key={unit}
                className="countdown-box"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              >
                <div className="count">{timeLeft[unit as keyof typeof timeLeft]}</div>
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
