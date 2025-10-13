import React from "react";
import "../styles/rose.css";

type RoseProps = {
  /** Optional extra classes to position it where you need */
  className?: string;
  /** Toggle gentle sway animation */
  animate?: boolean;
  /** Inline style overrides (e.g., margin) */
  style?: React.CSSProperties;
};

const Rose: React.FC<RoseProps> = ({ className, animate = true, style }) => {
  return (
    <div
      className={`rose-scene ${className ?? ""}`}
      style={style}
      role="img"
      aria-label="Decorative rose with thorns"
    >
      <div className={`flower ${animate ? "is-animated" : ""}`}>
        {/* Rose head */}
        <div className="rose">
          <span className="petal p1" />
          <span className="petal p2" />
          <span className="petal p3" />
          <span className="petal p4" />
          <span className="petal p5" />
          <span className="bud" />
        </div>

        {/* Stem + thorns */}
        <div className="stem">
          {/* left side thorns */}
          <span className="thorn tl1" />
          <span className="thorn tl2" />
          <span className="thorn tl3" />
          {/* right side thorns */}
          <span className="thorn tr1" />
          <span className="thorn tr2" />
          <span className="thorn tr3" />
        </div>

        {/* Leaves */}
        <span className="leaf left" />
        <span className="leaf right" />
      </div>
    </div>
  );
};

export default Rose;