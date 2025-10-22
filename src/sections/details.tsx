import React from "react";
import "../styles/details.css";
import { motion } from "framer-motion";
import { directionsData } from "../data/gallery";
import type { VenueKey } from "../data/gallery";

const mapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const directionsLink = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

const Details: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<null | VenueKey>(null);
  const [imageViewer, setImageViewer] = React.useState<null | string>(null);

  const openFor = (key: VenueKey) => {
    setOpenModal(key);
    document.body.style.overflow = "hidden"; // prevent scroll
  };

  const viewImage = (src: string) => {
    setImageViewer(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(null);
    setImageViewer(null);
    document.body.style.overflow = "";
  };

  const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const variants = { hidden: { opacity: 0, y: 24, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };
  const variants2 = { hidden: { opacity: 0, y: 34, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

  return (
    <section id="details" className="details-section">
      <div className="details-wrapper">
        <h2>Wedding Details</h2>

        <div className="details-cards">
          {/* Ceremony Card */}
          <motion.div
            className="details-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
          >
            <div className="details-card-image" onClick={() => viewImage("/Ceremony.jpeg")}>
              <img src="/Ceremony.jpeg" alt="Ceremony Venue" />
            </div>
            <div className="details-card-body">
              <h3>The Ceremony</h3>
              <div className="line-bar"></div>
              <p className="details-intro">
                We’ll exchange vows surrounded by our dearest family and friends in a heartfelt celebration of love and commitment.
                Please join us in creating a day filled with laughter, love, and everlasting memories as we start this beautiful chapter of our lives.
              </p>
              <ul className="details-meta">
                <li><strong>Date:</strong> November 22, 2025</li>
                <li><strong>Time:</strong> 3:00 PM</li>
                <li><strong>Venue:</strong> {directionsData.ceremony.venue}</li>
              </ul>
              <div className="details-actions">
                <button className="details-btn" onClick={() => openFor("ceremony")}>How To Get There</button>
                <a className="details-btn-outline" href={mapLink(directionsData.ceremony.venue)} target="_blank" rel="noopener noreferrer">
                  View Map
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            className="details-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants2}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
          >
            <div className="details-card-image" onClick={() => viewImage("/Reception.jpeg")}>
              <img src="/Reception.jpeg" alt="Reception Venue" />
            </div>
            <div className="details-card-body">
              <h3>The Reception</h3>
              <div className="line-bar"></div>
              <p className="details-intro">
                After the ceremony, join us for an enchanting evening of celebration filled with delicious food, lively music, and heartfelt moments with friends and family.
                We can’t wait to share this beautiful evening with all of you and create moments that will be cherished forever.
              </p>
              <ul className="details-meta">
                <li><strong>Date:</strong> November 22, 2025</li>
                <li><strong>Time:</strong> 6:00 PM</li>
                <li><strong>Venue:</strong> {directionsData.reception.venue}</li>
              </ul>
              <div className="details-actions">
                <button className="details-btn" onClick={() => openFor("reception")}>How To Get There</button>
                <a className="details-btn-outline" href={mapLink(directionsData.reception.venue)} target="_blank" rel="noopener noreferrer">
                  View Map
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Directions Modal */}
        {openModal && (
          <div className="modal-overlay" onClick={onOverlayClick}>
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="directions-title">
              <div className="modal-header">
                <h4 id="directions-title">{directionsData[openModal].title}</h4>
                <button className="modal-close" onClick={closeModal} aria-label="Close" title="Close">×</button>
              </div>

              <div className="modal-body">
                <p className="modal-venue"><strong>Venue:</strong> {directionsData[openModal].venue}</p>
                <ul className="direction-steps">
                  {directionsData[openModal].steps.map((step, idx) => (
                    <li key={idx}>
                      <span className="step-badge">{step.type}</span>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <a className="details-btn" href={directionsLink(directionsData[openModal].venue)} target="_blank" rel="noopener noreferrer">Open Directions</a>
                <a className="details-btn-outline" href={mapLink(directionsData[openModal].venue)} target="_blank" rel="noopener noreferrer">View Map</a>
              </div>
            </div>
          </div>
        )}

        {/* Image Viewer Overlay */}
        {imageViewer && (
          <div className="modal-overlay" onClick={onOverlayClick}>
            <div className="modal image-viewer" role="dialog" aria-modal="true">
              <button className="modal-close" onClick={closeModal} aria-label="Close" title="Close">×</button>
              <img src={imageViewer} alt="Venue View" style={{ maxWidth: "90vw", maxHeight: "80vh" }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
