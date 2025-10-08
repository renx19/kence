import React from "react";
import "../styles/rsvp.css";

const Rsvp: React.FC = () => {
  return (
    <section id="rsvp" className="rsvp-section">
      <h2>RSVP</h2>
      <p>We can’t wait to celebrate with you. Please confirm your attendance.</p>
      <form onSubmit={(e) => e.preventDefault()} className="rsvp-form">
        <input type="text" placeholder="Full Name" required />
        <select required>
          <option value="">Will you attend?</option>
          <option value="yes">Yes, I'll be there!</option>
          <option value="no">Sorry, can't make it</option>
        </select>
        <button type="submit">Send RSVP</button>
      </form>
    </section>
  );
};

export default Rsvp;
