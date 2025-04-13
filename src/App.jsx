import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
// import StudentForm from "./StudentForm";
import "./style.css";
import Events from "./Events";
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    // Animations for the video section
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

    // Animations for left and right text elements
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

    // Animations for bottom text
    gsap.to(".txt-bottom", {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: 2,
      },
    });

    // Create a single timeline for animations
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

  return (
    <div>
      <Navbar />
      {/* Your JSX content goes here */}
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
          {/* must use this section for additional components */}
          <div>
            <Events />
          </div>
          {/* <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/register" element={<StudentForm />} />
              </Routes>
            </Router>
          </AuthProvider> */}
        </section>
      </div>
    </div>
  );
}

export default App;
