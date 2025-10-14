import React from "react";
import "../styles/details.css";
import { motion } from "framer-motion";

const mapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const directionsLink = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

const Details: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<null | "ceremony" | "reception">(null);

  // Venue strings (include city/barangay for better pin accuracy)
  const ceremonyPlace = "Don Jose Heights – The Atrium, Quezon City";
  const receptionPlace = "Don Jose Heights – Clubhouse  Quezon City";

  // ✍️ Fill in the steps with your actual transport guidance
  const directions = {
    ceremony: {
      title: "How To Get There — Ceremony",
      venue: ceremonyPlace,
      steps: [
        {
          type: "By Car",
          text:
            "Navigate to “Don Jose Heights – The Atrium”. Enter via Don Jose Heights main gate and follow signage to The Atrium. Guest parking is available inside; arrive 15–20 minutes early.",
        },
        {
          type: "Public Transport",
          text:
            "From SM North or Trinoma, take a jeepney/UV Express bound for Lagro/Quirino Highway. Alight near Don Jose Heights gate, then take a tricycle to “The Atrium”. (Ask the guard/tricycle for the Atrium drop-off).",
        },
        {
          type: "Ride‑Hailing",
          text:
            "Set drop‑off to “Don Jose Heights – The Atrium”. Share the pin with your driver for easier entry through the guardhouse.",
        },
      ],
    },
    reception: {
      title: "How To Get There — Reception",
      venue: receptionPlace,
      steps: [
        {
          type: "By Car",
          text:
            "From The Atrium, follow internal road signs to the Clubhouse (Forest Barn Hall). On‑site parking is available; please follow staff instructions.",
        },
        {
          type: "Public Transport",
          text:
            "Same approach via Quirino Highway. Enter Don Jose Heights and take a tricycle to the “Clubhouse / Forest Barn Hall”.",
        },
        {
          type: "Ride‑Hailing",
          text:
            "Set destination to “Don Jose Heights Clubhouse (Forest Barn Hall)”. Share the clubhouse pin for smooth entry.",
        },
      ],
    },
  } as const;

  const closeModal = () => {
    setOpenModal(null);
    // optional: re-enable document scroll
    document.body.style.overflow = "";
  };

  const openFor = (key: "ceremony" | "reception") => {
    setOpenModal(key);
    // optional: prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


const variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },  // small shrink
  visible: { opacity: 1, y: 0, scale: 1 },
};

const variants2 = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },  // small shrink
  visible: { opacity: 1, y: 0, scale: 1 },
};


  return (
    <section id="details" className="details-section">
      <div className="details-wrapper">
        <h2>Wedding Details</h2>


        <div
          className="details-cards"

        >
          {/* Ceremony */}
          <motion.div
            className="details-card-ceremony"

            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}

          >
            <h3>The Ceremony</h3>
            <div className="line-bar"></div>
            <p className="details-intro">
              We’ll exchange vows surrounded by our dearest family and friends in a heartfelt celebration of love and commitment.
              Expect a morning full of joyful smiles, touching moments, and the warmth of togetherness.
              Our ceremony will be intimate yet memorable, capturing the spirit of our journey together.
              Please join us in creating a day filled with laughter, love, and everlasting memories as we start this beautiful chapter of our lives.
            </p>
            <ul className="details-meta">
              <li><strong>Date:</strong> November 22, 2025</li>
              <li><strong>Time:</strong> 3:00 PM</li>
              <li><strong>Venue:</strong> {ceremonyPlace}</li>
            </ul>
            <div className="details-actions">
              <button className="btn" onClick={() => openFor("ceremony")}>How To Get There</button>
              <a className="btn btn-outline" href={mapLink(ceremonyPlace)} target="_blank" rel="noopener noreferrer">View Map</a>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div
            className="details-card-reception"
           
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants2}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
          >

            <h3>The Reception</h3>
            <div className="line-bar"></div>
            <p className="details-intro">
              After the ceremony, join us for an enchanting evening of celebration filled with delicious food, lively music, and heartfelt moments with friends and family.
              Dance, laugh, and toast to new beginnings as we continue to celebrate the love and joy that surrounds us.
              From the first bite to the final dance, the reception will be a time to relax, connect, and make unforgettable memories together.
              We can’t wait to share this magical evening with all of you and create moments that will be cherished forever.
            </p>
            <ul className="details-meta">
              <li><strong>Date:</strong> November 22, 2025</li>
              <li><strong>Time:</strong> 6:00 PM</li>
              <li><strong>Venue:</strong> {receptionPlace}</li>
            </ul>
            <div className="details-actions">
              <button className="btn" onClick={() => openFor("reception")}>How To Get There</button>
              <a className="btn btn-outline" href={mapLink(receptionPlace)} target="_blank" rel="noopener noreferrer">View Map</a>
            </div>
          </motion.div>
        </div>


        {/* Directions Modal */}
        {openModal && (
          <div
            className="modal-overlay"
            onClick={onOverlayClick}
            aria-hidden="true"
          >
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="directions-title"
            >
              <div className="modal-header">
                <h4 id="directions-title">{directions[openModal].title}</h4>
                <button
                  className="modal-close"
                  onClick={closeModal}
                  aria-label="Close"
                  title="Close"
                >
                  ×
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-venue">
                  <strong>Venue:</strong> {directions[openModal].venue}
                </p>

                <ul className="direction-steps">
                  {directions[openModal].steps.map((step, idx) => (
                    <li key={idx}>
                      <span className="step-badge">{step.type}</span>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <a
                  className="btn"
                  href={directionsLink(directions[openModal].venue)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Directions
                </a>
                <a
                  className="btn btn-outline"
                  href={mapLink(directions[openModal].venue)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>

        )}
      </div>
    </section >
  );
};


export default Details;