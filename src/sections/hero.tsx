import React, { useState, useEffect } from "react";
import "../styles/hero.css";

const WEDDING_DATE = new Date("2025-12-15T00:00:00");

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      <img src="/FLO07687.jpeg" alt="Hero" className="hero-image" />

      <div className="hero-overlay">
        <h1 className="couple-names">John & Marie</h1>
        <p className="wedding-date">December 15, 2025</p>
        <p className="wedding-location">Tagaytay, Philippines</p>

        <div className="countdown">
          <span>{timeLeft.days}d</span>:
          <span>{timeLeft.hours}h</span>:
          <span>{timeLeft.minutes}m</span>:
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
