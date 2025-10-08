import React from "react";
import "../styles/Gallery.css";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {[1,2,3,4,5,6].map((num) => (
          <img key={num} src={`https://picsum.photos/300?random=${num}`} alt={`Gallery ${num}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
