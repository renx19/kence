import React from "react";
import { motion } from "framer-motion";
import "../styles/story.css";
import storyImage from "../../public/FLO08009.jpeg";
import storyImage2 from "../../public/FLO07801.jpeg";

const Story: React.FC = () => {
  // variants without function
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="story" className="story-section">
      <div className="story-wrapper">
        {/* First block */}
        <div className="story-content">
          <motion.div
            className="story-text"
            initial="hidden"
            whileInView="visible"
             viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
          >
            <h2>Our Story</h2>
            <p>
              It all began with a smile. From classmates to soulmates, our journey
              has been filled with laughter, adventures, and love.
            </p>
            <p>
              From our first coffee date to traveling together, every moment has
              been special. We can't wait to share our wedding day with all of you!
            </p>
          </motion.div>

          <motion.div
            className="story-image"
            initial="hidden"
            whileInView="visible"
             viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="story-bg"></div>
            <img src={storyImage} alt="Our journey" />
          </motion.div>
        </div>

        {/* Second block */}
        <div className="story-content">
          <motion.div
            className="story-image"
            initial="hidden"
            whileInView="visible"
             viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="story-bg"></div>
            <img src={storyImage2} alt="Our journey" />
          </motion.div>

          <motion.div
            className="story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            <h2>Our Story</h2>
            <p>
              It all began with a smile. From classmates to soulmates, our journey
              has been filled with laughter, adventures, and love.
            </p>
            <p>
              From our first coffee date to traveling together, every moment has
              been special. We can't wait to share our wedding day with all of you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
