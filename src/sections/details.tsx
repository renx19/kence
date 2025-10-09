import React from "react";
import "../styles/details.css";

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

  return (
    <section id="details" className="details-section">
      <div className="details-wrapper">
        <h2>Wedding Details</h2>

        <div className="details-cards">
          {/* Ceremony */}
          <div className="details-card">



            <h3>The Ceremony</h3>
            <div className="line-bar"></div>
            <p className="details-intro">
              We’ll exchange vows surrounded by our dearest family and friends, in a moment filled with love, laughter, and heartfelt promises. It’s the beginning of our forever, and we’re so grateful to share this special day with those who mean the most to us.
            </p>
            <ul className="details-meta">
              <li className="meta-date"><strong>Date:</strong> November 22, 2025</li>
              <li className="meta-time"><strong>Time:</strong> 3:00 PM</li>
              <li className="meta-venue"><strong>Venue:</strong> {ceremonyPlace}</li>
            </ul>
            <div className="details-actions">
              <button className="btn" onClick={() => openFor("ceremony")}>
                How To Get There
              </button>
              <a
                className="btn btn-outline"
                href={mapLink(ceremonyPlace)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Map
              </a>
            </div>
          </div>

          {/* Reception */}
          <div className="details-card">

            <h3>The Reception</h3>
            <div className="line-bar"></div>

            <p className="details-intro">
              After the ceremony, join us for an evening of celebration filled with delicious food, joyful dancing, and heartfelt moments. It’s a time to unwind, connect, and create unforgettable memories together as we begin our journey as a married couple.
            </p>
            <ul className="details-meta">
              <li className="meta-date"><strong>Date:</strong> December 15, 2025</li>
              <li className="meta-time"><strong>Time:</strong> 6:00 PM </li>

              <li className="meta-venue"><strong>Venue:</strong> {receptionPlace}</li>
            </ul>

            <div className="details-actions">
              <button className="btn" onClick={() => openFor("reception")}>
                How To Get There
              </button>
              <a
                className="btn btn-outline"
                href={mapLink(receptionPlace)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Map
              </a>
            </div>
          </div>

          {/* Dress Code (unchanged from earlier) */}
          <div className="details-card">
            <h3>Dress Code</h3>
            <div className="line-bar"></div>

            <p className="details-intro">
              <strong>Formal / Semi-formal Attire</strong><br />
              We kindly ask guests to dress in a way that reflects the elegance of the occasion. Soft tones and polished styles are encouraged to complement the overall theme.
            </p>

            <div className="dress-guidelines">
              <ul className="details-meta">
                <li className="meta-men"><strong>Men:</strong> Long-sleeved dress shirts and slacks</li>
                <li className="meta-women"><strong>Women:</strong> Mid-length or full-length dresses</li>
     
              </ul>
            </div>

         
            <div className="color-palette">
              <h4>Color Guide</h4>
              <div className="palette-wrapper">
                <div className="palette-group">
                  <span>Godparents:</span>
                  <div className="swatches">
                    <div className="swatch" style={{ background: "#dbe2ea" }} />
                    <div className="swatch" style={{ background: "#c7d1db" }} />
                    <div className="swatch" style={{ background: "#adbcc9" }} />
                    <div className="swatch" style={{ background: "#8ea3b8" }} />
                    <div className="swatch" style={{ background: "#eef3f7" }} />
                  </div>
                </div>
                <div className="palette-group">
                  <span>Guests:</span>
                  <div className="swatches">
                    <div className="swatch" style={{ background: "#dfeaf2" }} />
                    <div className="swatch" style={{ background: "#efe7d6" }} />
                    <div className="swatch" style={{ background: "#e8efe6" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>



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
    </section>
  );
};


export default Details;