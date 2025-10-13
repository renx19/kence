import React from "react";
import { motion } from "framer-motion";
import "../styles/story.css";


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
              A frienship that develops over time. From schoolmate to soulmate, our journey of laughter, adventure and love.
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
            <img src="/FLO07801.jpeg" alt="Our journey" />
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
            <img src="/FLO08009.jpeg" alt="Our journey" />
          </motion.div>

          <motion.div
            className="story-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
           
     
            <p>
             From our first mcdo date to movie date that everymoment is special. We can’t wait to share our lovey wedding day with all of you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
