
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../styles/rsvp.css";
// import { motion } from "motion/react";

// const Rsvp: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [attendance, setAttendance] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic client-side validation
//     if (!name.trim()) return toast.warn("Please enter your full name.");
//     if (!email.trim()) return toast.warn("Please enter your email.");
//     if (!attendance) return toast.warn("Please select your attendance.");

//     setLoading(true);

//     const payload = { name, email, attendance };

//     try {
//       const res = await fetch(
//         "https://script.google.com/macros/s/AKfycbzRpPPOv757OzhWtH-ZUnMHSJCMn88IWCSFX5b7a4r3-e6ab8keCjhcCoZ9g2eRfdtkTg/exec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       const json = await res.json();

//       // Handle Google Script response
//       switch (json.result) {
//         case "success":
//           toast.success("✅ RSVP submitted successfully!");
//           setName("");
//           setEmail("");
//           setAttendance("");
//           break;
//         case "duplicate":
//           toast.warn("⚠️ You already submitted earlier!");
//           break;
//         case "invalid":
//           toast.error(`⚠️ ${json.message}`);
//           break;
//         case "error":
//         default:
//           toast.error(`⚠️ Something went wrong: ${json.message}`);
//           break;
//       }
//     } catch (error) {
//       toast.error("⚠️ Failed to send RSVP.");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="rsvp" className="rsvp-section">
//       <h2 className="gift-section">RSVP</h2>
//       <motion.div className="rsvp-form-container">
//         <div className="rsvp-card">
//           <h2 className="rsvp-h2">RSVP</h2>
//           <p>Will you attend our special day?</p>

//           <form onSubmit={handleSubmit} className="rsvp-form" noValidate>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <select
//               value={attendance}
//               onChange={(e) => setAttendance(e.target.value)}
//               required
//             >
//               <option value="">Select your response</option>
//               <option value="Yes">Yes, I’ll be there!</option>
//               <option value="No">Sorry, can’t make it</option>
//             </select>

//             <button type="submit" disabled={loading}>
//               {loading ? "Sending..." : "Send RSVP"}
//             </button>
//           </form>
//         </div>
//       </motion.div>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </section>
//   );
// };

// export default Rsvp;


import React from "react";
import "../styles/rsvp.css";

const RsvpEmbed: React.FC = () => {
  return (
    <section id="rsvp" className="rsvp-section">
      <h2 className="gift-section">RSVP</h2>

      {/* iframe wrapper with id */}
      <div id="rsvp-iframe-wrapper">
        <iframe
          id="rsvp-iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdLxURRJNCW6x3VwBoyl7N7G669vyc2FNrCm7n4pTV9KmaiMw/viewform?embedded=true"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="RSVP Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default RsvpEmbed;
