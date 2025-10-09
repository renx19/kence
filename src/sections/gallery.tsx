import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "../styles/gallery.css";

const imageList = [
  "/FLO07675.jpeg",
  "/FLO07682.jpeg",
  "/FLO07687.jpeg",
  "/FLO07801.jpeg",
  "/FLO07806.jpeg",
  "/FLO07880.jpeg",
  "/FLO08009.jpeg",
  "/FLO08162.jpeg",
  "/FLO08195.jpeg",
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const breakpointColumns = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2>Gallery</h2>

        <Masonry
          breakpointCols={breakpointColumns}
          className="gallery-grid"
          columnClassName="gallery-column"
        >
          {imageList.slice(0, visibleCount).map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
          ))}
        </Masonry>

        {visibleCount < imageList.length && (
          <div className="gallery-actions">
            <button className="btn" onClick={() => setVisibleCount((prev) => prev + 6)}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
