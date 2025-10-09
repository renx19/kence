// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";   // 👈 import this
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>        {/* 👈 wrap your app */}
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
