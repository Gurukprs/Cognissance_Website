import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import HeroVideo from "./Components/HeroVideo";


// Import individual event registration components
import CodingContest from "./forms/CodingContest";
import Hackathon from "./forms/Hackathon";
import DebuggingChallenge from "./forms/DebuggingChallenge";
import MachineLearningChallenge from "./forms/MachineLearningChallenge";
import AppDevelopmentChallenge from "./forms/AppDevelopmentChallenge";

import QuizBowl from "./forms/QuizBowl";
import PublicSpeaking from "./forms/PublicSpeaking";
import PhotographyContest from "./forms/PhotographyContest";
import DebateChampionship from "./forms/DebateChampionship";
import ArtAndCraftExhibition from "./forms/ArtAndCraftExhibition";

import "./style.css";

// 👉 All routing and logic goes here
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    gsap.to(".img-container", {
      scale: 52,
      ease: "ease",
      scrollTrigger: {
        trigger: ".video-section",
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true,
      },
    });

    gsap.to(".right", {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });
    gsap.to(".left", {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });

    gsap.to(".txt-bottom", {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: 2,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=600",
        scrub: 1,
        pin: true,
      },
    });

    timeline
      .from(".left-side div", {
        y: 150,
        opacity: 0,
        stagger: { amount: 0.4 },
        delay: 0.5,
      })
      .from(".right-side", { opacity: 0, duration: 2 }, 0.5)
      .to(".wrapper", { x: -window.innerWidth });
  }, []);

  // Show Navbar only if NOT on register pages
  const showNavbar = !location.pathname.startsWith("/register/");

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <div className="wrapper">
              <section className="video-section">
                <HeroVideo />
              </section>
              <section>
                <Events />
              </section>
            </div>
          }
        />

        {/* Register pages */}
        <Route path="/register/coding-contest" element={<CodingContest />} />
        <Route path="/register/hackathon" element={<Hackathon />} />
        <Route path="/register/debugging-challenge" element={<DebuggingChallenge />} />
        <Route path="/register/machine-learning-challenge" element={<MachineLearningChallenge />} />
        <Route path="/register/app-development-challenge" element={<AppDevelopmentChallenge />} />
        <Route path="/register/quiz-bowl" element={<QuizBowl />} />
        <Route path="/register/public-speaking" element={<PublicSpeaking />} />
        <Route path="/register/photography-contest" element={<PhotographyContest />} />
        <Route path="/register/debate-championship" element={<DebateChampionship />} />
        <Route path="/register/art-and-craft-exhibition" element={<ArtAndCraftExhibition />} />
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
