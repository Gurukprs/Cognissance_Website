import React, { useEffect, useState } from "react";
import "../CSS/HeroVideo.css";

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animateElements = () => {
      const titles = document.querySelectorAll('.title span');
      const mainTitle = document.querySelector('.cognissance-3d');
      const bottomText = document.querySelector('.txt-bottom');
      const collegeHeader = document.querySelector('.college-float');

      // Fade in college header
      if (collegeHeader) {
        collegeHeader.style.opacity = '0';
        collegeHeader.style.transform = 'translateY(-20px)';
        setTimeout(() => {
          collegeHeader.style.transition = 'all 0.8s ease';
          collegeHeader.style.opacity = '1';
          collegeHeader.style.transform = 'translateY(0)';
        }, 200);
      }

      // Fade in main title
      if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
          mainTitle.style.transition = 'all 1s ease';
          mainTitle.style.opacity = '1';
          mainTitle.style.transform = 'translateY(0)';
        }, 600);
      }

      // Stagger other titles
      titles.forEach((title, index) => {
        title.style.opacity = '0';
        title.style.transform = 'translateX(30px)';
        setTimeout(() => {
          title.style.transition = 'all 0.7s ease';
          title.style.opacity = '1';
          title.style.transform = 'translateX(0)';
        }, 1000 + index * 200);
      });

      // Fade in bottom text
      if (bottomText) {
        bottomText.style.opacity = '0';
        setTimeout(() => {
          bottomText.style.transition = 'opacity 1s ease';
          bottomText.style.opacity = '1';
        }, 2000);
      }
    };

    requestAnimationFrame(animateElements);
  }, []);

  return (
    <div className="hero-wrapper">
      <section className="video-section">
        <div className="video-container">
          <h3 className="college-float">KONGU ENGINEERING COLLEGE</h3>
          <h1 className="cognissance-3d">COGNISSANCE'25</h1>
        </div>

        <div className="img-container">
          <img 
            src={isMobile ? "/media/window_mob1.png" : "/media/window.png"} 
            alt="Window Overlay" 
            className="img" 
          />
        </div>

        <div className="text-content">
          <div className="text-content-inner">
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
    </div>
  );
};

export default HeroVideo;