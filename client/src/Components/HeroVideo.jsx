import React, { useEffect } from "react";
import Events from "./Events";
import "../CSS/HeroVideo.css"; // Import the separate CSS file

const HeroVideo = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('.title span');
    const mainTitle = document.querySelector('.cognissance-3d');

    if (mainTitle) {
      mainTitle.style.opacity = '0';
      mainTitle.style.transform = 'translateY(20px)';

      setTimeout(() => {
        mainTitle.style.transition = 'opacity 0.8s ease, transform 1s ease';
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
      }, 300);
    }

    titles.forEach((title, index) => {
      title.style.opacity = '0';
      title.style.transform = 'translateX(30px)';

      setTimeout(() => {
        title.style.transition = 'opacity 0.6s ease, transform 0.7s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateX(0)';
      }, 800 + index * 200);
    });

    const bottomText = document.querySelector('.txt-bottom');
    if (bottomText) {
      bottomText.style.opacity = '0';

      setTimeout(() => {
        bottomText.style.transition = 'opacity 1s ease';
        bottomText.style.opacity = '1';
      }, 1800);
    }
  }, []);

  return (
    <div className="wrapper">
      {/* Google Font Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
        rel="stylesheet"
      />

      <section className="video-section">
        <div className="video-container">
          <div className="centerizer">
            <div className="cognissance-wrapper">
              <h1 className="cognissance-3d shimmer-text">
                COGNISSANCE'25
              </h1>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src="/media/window.png" alt="" className="img" />
        </div>

        <div className="text-content">
          <div 
            className="img_txt" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '40px'
            }}
          >
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
  );
};

export default HeroVideo;
