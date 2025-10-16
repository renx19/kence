// // components/Loading.tsx
// import React from "react";
// import "../styles/loading.css"; // We'll reuse your CSS

// const Loading: React.FC = () => {
//   return (
//     <div className="loading-container">
//       <span>Loading</span>
//     </div>
//   );
// };

// export default Loading;



import React, { useEffect, useState } from "react";
import "../styles/loading.css";

const Loading: React.FC = () => {
  const baseText = "L";
  const waveText = "❤ADING";
  const fullText = baseText + waveText;

  const [displayText, setDisplayText] = useState(baseText);
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setForward(false);
          setIndex(index - 1);
        }
      } else {
        if (index >= baseText.length) {
          setDisplayText(fullText.substring(0, index));
          setIndex(index - 1);
        } else {
          setForward(true);
          setIndex(index + 1);
        }
      }
    }, 350);

    return () => clearInterval(interval);
  }, [index, forward]);

  return (
    <div className="loading">
      <div className="loading-dots">
        <div className="dot-1"></div>
        <div className="dot-2"></div>
        <div className="dot-3"></div>
        <div className="dot-4"></div>
      </div>
      <p className="loading-text">{displayText}</p>
    
    </div>
  );
};

export default Loading;