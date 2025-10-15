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
         <h2 className="section-title-story">Our Story</h2>
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
           
            <p>
              From classmates to soulmates, our friendship blossomed into a beautiful love story over time. 
              From sharing laughs at school to memorable dates—from our first McDonald's meal to movie nights—every moment has been truly special.
              Now, we're thrilled to invite you to celebrate the next chapter of our journey—our wedding day!
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
             Join us as we say "I do" and begin our forever, surrounded by the people who have been part of our story. Your presence will make our celebration even more meaningful, and 
             we can’t wait to share this joyous occasion with you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
