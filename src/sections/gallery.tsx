import Masonry from "react-masonry-css";
import "../styles/gallery.css";

const imageList = [
  { src: "/FLO07648.jpeg", type: "portrait" },
  { src: "/FLO07801.jpeg", type: "landscape" },
  { src: "/FLO07777.jpeg", type: "portrait" },
  { src: "/FLO07682.jpeg", type: "landscape" },
  { src: "/FLO07958.jpeg", type: "portrait" },
  { src: "/FLO08162.jpeg", type: "landscape" },
  { src: "/FLO07806.jpeg", type: "portrait" },
  { src: "/FLO07880.jpeg", type: "landscape" },
  { src: "/FLO08195.jpeg", type: "portrait" },
];

const Gallery = () => {
  const breakpointCols = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2>Gallery</h2>

        <Masonry
          breakpointCols={breakpointCols}
          className="gallery-grid"
          columnClassName="gallery-column"
        >
          {imageList.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className={img.type} // portrait / landscape
            />
          ))}
        </Masonry>

        <div className="gallery-actions">
          <a href="/gallery" className="btn">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
