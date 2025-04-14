import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Events from "./Events";

// Import individual event registration components
import CodingContest from "./registrations/CodingContest";
import Hackathon from "./registrations/Hackathon";
import DebuggingChallenge from "./registrations/DebuggingChallenge";
import MachineLearningChallenge from "./registrations/MachineLearningChallenge";
import AppDevelopmentChallenge from "./registrations/AppDevelopmentChallenge";

import QuizBowl from "./registrations/QuizBowl";
import PublicSpeaking from "./registrations/PublicSpeaking";
import PhotographyContest from "./registrations/PhotographyContest";
import DebateChampionship from "./registrations/DebateChampionship";
import ArtAndCraftExhibition from "./registrations/ArtAndCraftExhibition";

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
                <div className="video-container">
                  <video src="/media/flower.mp4" loop muted autoPlay></video>
                </div>
                <div className="img-container">
                  <img src="/media/window.png" alt="" className="img" />
                </div>
                <div className="text-content">
                  <div className="img_txt">
                    <div className="title sm left">
                      <span>CSEA & CCC</span>
                    </div>
                    <div className="title bg left">
                      <span>Presents</span>
                    </div>
                    <div className="title bg right">
                      <span>An</span>
                    </div>
                    <div className="title bg right symposium">
                      <span>Inter Department Symposium</span>
                    </div>
                  </div>
                  <p className="txt-bottom">Cognissance team</p>
                </div>
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
