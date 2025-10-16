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



// import React, { useEffect, useState } from "react";
// import "../styles/loading.css";

// const Loading: React.FC = () => {
//   const baseText = "L";
//   const waveText = "❤VE";
//   const fullText = baseText + waveText;

//   const [displayText, setDisplayText] = useState(baseText);
//   const [index, setIndex] = useState(0);
//   const [forward, setForward] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (forward) {
//         if (index < fullText.length) {
//           setDisplayText(fullText.substring(0, index + 1));
//           setIndex(index + 1);
//         } else {
//           setForward(false);
//           setIndex(index - 1);
//         }
//       } else {
//         if (index >= baseText.length) {
//           setDisplayText(fullText.substring(0, index));
//           setIndex(index - 1);
//         } else {
//           setForward(true);
//           setIndex(index + 1);
//         }
//       }
//     }, 350);

//     return () => clearInterval(interval);
//   }, [index, forward]);

//   return (
//     <div className="loading">
//       <div className="loading-dots">
//         <div className="dot-1"></div>
//         <div className="dot-2"></div>
//         <div className="dot-3"></div>
//         <div className="dot-4"></div>
//       </div>
//       <p className="loading-text">{displayText}</p>
    
//     </div>
//   );
// };

// export default Loading;


import * as React from "react";
import "../styles/loading.css";

type CSSVars = React.CSSProperties & {
  ["--dur"]?: string;
  ["--size"]?: string;
};

export interface LoaderProps {
  text?: string;
  color?: string;
  size?: string | number;
  duration?: number;
  overlay?: boolean;
  /** Stretch to 100% width of the parent (inline) */
  fullWidth?: boolean;
  /** Stretch to the viewport height (inline) */
  fullHeight?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  text = "Loading",
  color,
  size = "15em",
  duration = 8,
  overlay = false,
  fullWidth = false,
  fullHeight = false,
  className,
  style,
  ariaLabel,
}) => {
  const groups = Array.from({ length: 6 });
  const sectors = Array.from({ length: 6 });

  const sizeStr = typeof size === "number" ? `${size}px` : size;

  const styleVars: CSSVars = {
    "--dur": `${duration}s`,
    "--size": sizeStr,
    color,
    ...style,
  };

  const classes = [
    "loader",
    overlay ? "loader--overlay" : "",
    fullWidth ? "loader--fullwidth" : "",
    fullHeight ? "loader--fullheight" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={styleVars}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel ?? text}
    >
      <div
        className="hexagon"
        role="img"
        aria-label="Animated hexagonal ripples"
      >
        {groups.map((_, gi) => (
          <div className="hexagon__group" key={gi}>
            {sectors.map((_, si) => (
              <div className="hexagon__sector" key={si} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;