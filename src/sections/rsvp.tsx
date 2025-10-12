import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/rsvp.css";

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
          mode: "no-cors", // bypass CORS
          headers: {
            "Content-Type": "application/json",
          },
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

  return (
    <section id="rsvp" className="rsvp-section">
      <h2>RSVP</h2>
      <p>Will you attend our special day?</p>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        >
          <option value="">Select your response</option>
          <option value="Yes">Yes, I’ll be there!</option>
          <option value="No">Sorry, can’t make it</option>
        </select>
        <button type="submit">Send RSVP</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Rsvp;
