import "../styles/gallery.css";

const imageList = [
  { src: "/FLO08031.jpeg", type: "landscape" },
  { src: "/FLO07660.jpeg", type: "portrait" },
  { src: "/FLO07682.jpeg", type: "landscape" },
  { src: "/FLO07792.jpeg", type: "portrait" },
  { src: "/FLO08162.jpeg", type: "landscape" },
  { src: "/FLO07978.jpeg", type: "portrait" },
  { src: "/FLO07880.jpeg", type: "landscape" },
  { src: "/FLO07885.jpeg", type: "portrait" },
  { src: "/FLO08103.jpeg", type: "portrait" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="prenup-title">Prenup Video</h2>{/* explicit class */}
        <div
          className="prenup-video"

        >
          <div className="video-wrapper">
            <iframe
              id="prenup-video"
              src="https://www.youtube.com/embed/5CnmImL1UT0?si=2YjfvM0gFfwVqdH1"
              title="Wedding Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="gallery-wrapper">{/* fixed name */}
          <h2 className="gallery-title">Gallery</h2>{/* explicit class */}
          <div className="gallery-actions">
            <a className="btn" href="/gallery"> View More</a>
          </div>
        </div>
        <div className="gallery-grid">
          {imageList.map((img) => (
            <div key={img.src} className="image-item">
              <img
                src={img.src}
                alt="Gallery item"
                loading="lazy"
                decoding="async"
                className={img.type} // portrait | landscape (optional)
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;