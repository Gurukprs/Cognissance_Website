import React, { useEffect } from "react";
import Events from "./Events";

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
      }, 800 + (index * 200));
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

      {/* Updated shimmer effect with softer golden color transition */}
      <style>{`
        .shimmer-text {
          font-family: 'Cinzel Decorative', cursive;
          font-weight: 700;
          color: white; /* Default white color */
          background: linear-gradient(
            90deg,
            #F9F295,
            #E0AA3E,
            #FAF398,
            #B88A44,
            white,
            #F9F295
          );
          background-size: 400% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerGold 4s ease-in-out infinite, changeTextColor 3s ease-in-out infinite;
          text-shadow: 
            0 0 5px rgba(255, 215, 0, 0.3), 
            0 0 10px rgba(255, 215, 0, 0.4), 
            0 0 15px rgba(255, 215, 0, 0.6), /* Soft golden sparkles */
            0 0 30px rgba(255, 255, 255, 0.2), /* Soft white sparkle */
            0 0 50px rgba(255, 255, 255, 0.4); /* Larger white sparkle */
        }

        /* Shimmer animation for the gold effect */
        @keyframes shimmerGold {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        /* Animation for color transition between white and golden */
        @keyframes changeTextColor {
          0% {
            color: white;
          }
          50% {
            color: #F9F295; /* Soft golden color */
          }
          100% {
            color: white;
          }
        }

        /* Wrapper for centering the text */
        .cognissance-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: relative;
        }
      `}</style>

      <section className="video-section">
        <div className="video-container">
          <div className="centerizer">
            {/* Added wrapper for center positioning */}
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
