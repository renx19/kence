import React from "react";
import "../styles/Details.css";

const Details: React.FC = () => {
  return (
    <section id="details" className="details-section">
      <h2>Wedding Details</h2>

      <div className="details-cards">

        <div className="details-card">
          <div className="details-icon">📍</div>
          <h3>Venue</h3>
          <p>The Forest Barn, Tagaytay</p>
        </div>

        <div className="details-card">
          <div className="details-icon">📅</div>
          <h3>Date & Time</h3>
          <p>December 15, 2025<br />Ceremony: 3:00 PM<br />Reception follows</p>
        </div>

        <div className="details-card">
          <div className="details-icon">👗</div>
          <h3>Attire</h3>
          <p>Semi-formal / Smart Casual<br />Feel free to wear pastels</p>
        </div>

      </div>
    </section>
  );
};

export default Details;
