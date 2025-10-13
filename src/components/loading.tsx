// components/Loading.tsx
import React from "react";
import "../styles/loading.css"; // We'll reuse your CSS

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <span>Loading</span>
    </div>
  );
};

export default Loading;
