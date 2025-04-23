import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Laptop from "./Landing/Laptop";
import Controller from "./Landing/Controller";

// Import individual event registration components
import PaperForge from "./forms/PaperForge";;
import PitchProject from "./forms/PitchProject";
import WebNest from "./forms/WebNest";
import BrainFryer from "./forms/BrainFryer";
import TechQuest from "./forms/TechQuest";
import Second from "./Components/Events";
import "./style.css";
// import Laptop from "./Landing/Laptop";

// 👉 All routing and logic goes here
function AppContent() {
  const location = useLocation();

  // Show Navbar only if NOT on register pages
  const showNavbar = !location.pathname.startsWith("/register/");

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Controller />} />
        {/* <Route path="/laptop" element={<Laptop />} /> */}
        <Route path="/events" element={<Second />} />
        {/* <Route path="/" element={<Events />} /> */}
        {/* Register pages */}
        <Route path="/register/paper-forge" element={<PaperForge />} />
        <Route path="/register/pitch-project" element={<PitchProject />} />
        <Route path="/register/brain-fryer" element={<BrainFryer />} />
        <Route path="/register/tech-quest-challenge" element={<TechQuest />} />
        <Route path="/register/web-nest" element={<WebNest />} />
        


      </Routes>
    </>
  );
}

// 👉 Outer app wraps everything inside <Router>
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
