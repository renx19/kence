import React from "react";
import { motion } from "framer-motion";
import "../styles/gift.css";

const Gifts: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="gifts" className="gifts-section">
  
       <h2 className="gift-section">Gifts</h2>
      <div className="gifts-wrapper">
        {/* Left Image */}
        <motion.div
          className="gifts-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        >
          <img src="/gifts.jpg" alt="Dress Code" />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="gifts-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <img src="/dress-code.png" alt="Gifts Example" />
        </motion.div>
      </div>
    </section>
  );
};

export default Gifts;
