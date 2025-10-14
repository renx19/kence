import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/rsvp.css";
import { motion } from "motion/react";

const Rsvp: React.FC = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwvQ5RRMTBKX0ZJgjxEOilBBPElCWlrmOf-o6sHjWqDcLRByk80DOkYSZ79aRjauq-X0A/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, attendance }),
        }
      );

      toast.success("✅ RSVP submitted!");
      setName("");
      setAttendance("");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? `⚠️ Failed to send RSVP: ${error.message}`
          : "⚠️ Failed to send RSVP: Unknown error"
      );
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-card-wrapper">
        {/* Left side — RSVP Form */}
        <motion.div
          className="rsvp-form-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        >
          <div className="rsvp-card">
            <h2 className="rsvp-h2">RSVP</h2>
            <p>Will you attend our special day?</p>

            <form onSubmit={handleSubmit} className="rsvp-form" noValidate>
              <label className="sr-only" htmlFor="rsvp-name">Full Name</label>
              <input
                id="rsvp-name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />

              <label className="sr-only" htmlFor="rsvp-attendance">Attendance</label>
              <select
                id="rsvp-attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                required
              >
                <option value="">Select your response</option>
                <option value="Yes">Yes, I’ll be there!</option>
                <option value="No">Sorry, can’t make it</option>
              </select>

              <button className="rsvp-button" type="submit">Send RSVP</button>
            </form>
          </div>
        </motion.div>

        {/* Right side — YouTube Embed */}
        <motion.div
          className="rsvp-video"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={variants}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="video-wrapper">
            <iframe
              id="rsvp-video"
              src="https://www.youtube.com/embed/YakDcw2TUR0?si=CyXjzD4PNeiGdqGb&amp;start=97"
              title="Wedding Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Rsvp;
