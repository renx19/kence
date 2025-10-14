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
      <div className="gifts-wrapper">
        {/* 📝 Left side — Gifts text */}
        <motion.div
          className="gifts-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        >
          <div className="gifts-text-inner">
            <h2>Gifts</h2>
            <p>
              Your presence at our wedding is the greatest gift of all.
              If you'd like to honor us with something extra, we would truly
              appreciate your love and support as we build our future together.
              <br />
              <br />
              No boxed gifts, please.
            </p>
            <ul className="gifts-details">
              <li>
                <strong>Gcash:</strong> 0917 123 4567
              </li>
              <li>
                <strong>Bank:</strong> BPI • 1234 5678 9012
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="gifts-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <img src="/dress-code.png" alt="Dress Code" />
        </motion.div>

      </div>
    </section>
  );
};

export default Gifts;
