import React, { useState } from "react";
import "../styles/Gallery.css";

const imageList = [
  "/FLO07675.jpeg",
  "/FLO07682.jpeg",
  "/FLO07687.jpeg",
  "/FLO07801.jpeg",
  "/FLO07806.jpeg",
  "/FLO07880.jpeg",
  "/FLO08009.jpeg",
  "/FLO08009.jpeg",
  "/FLO08162.jpeg",
  "/FLO08195.jpeg",
  "/FLO08009.jpeg",
  "/FLO08009.jpeg",
  "/FLO08009.jpeg",
];

const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, imageList.length));
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {imageList.slice(0, visibleCount).map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
        ))}
      </div>

      {visibleCount < imageList.length && (
        <div className="gallery-actions">
          <button className="btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;