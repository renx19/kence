// App.tsx
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Invitation from "./pages/invitation";
import Layout from "./layout/layout";
import './styles/global.css'

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/home");
  };

  return (
    <Routes>
      <Route path="/" element={<Invitation onOpen={handleOpen} />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
