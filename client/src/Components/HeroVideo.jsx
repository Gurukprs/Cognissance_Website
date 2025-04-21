import React, { useEffect, useState } from "react";
import Events from "./Events";
import "../CSS/HeroVideo.css"; // Import the separate CSS file

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // ✅ Initial check

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkIfMobile(); // Initial check
    window.addEventListener("resize", checkIfMobile); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", checkIfMobile); // ✅ Cleanup
    };
  }, []); // 🔁 This effect only sets up the listener and initial state

  useEffect(() => {
    const mainTitle = document.querySelector('.cognissance-3d');
    console.log("Main Title Element:", mainTitle); // <--- 👀 This is what we want to see
    setTimeout(() => {
      requestAnimationFrame(() => {
        const titles = document.querySelectorAll('.title span');
        const mainTitle = document.querySelector('.cognissance-3d');
        const bottomText = document.querySelector('.txt-bottom');
  
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
  
        if (bottomText) {
          bottomText.style.opacity = '0';
  
          setTimeout(() => {
            bottomText.style.transition = 'opacity 1s ease';
            bottomText.style.opacity = '1';
          }, 1800);
        }
      });
    }, 0); // You can increase this to 50ms or 100ms if needed
  }, []);
  

  return (
    <div className="wrapper">
      {/* Google Font Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
        rel="stylesheet"
      />

      <section className="video-section">
        {/* <div className="video-container">
          <div className="centerizer">
            <div className="cognissance-wrapper">
              <h1 className="cognissance-3d shimmer-text">
                COGNISSANCE'25
              </h1>
            </div>
          </div>
        </div> */}
        {/* Try 2 */}
        {/* <div className="video-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            zIndex: 10,
            position: 'relative',
          }}>
            <h1 className="cognissance-3d shimmer-text" style={{
              opacity: 1,
              transform: 'translateY(0)',
              fontSize: '3.5rem',
              color: '#fff',
              // zIndex: ,
            }}>
              COGNISSANCE'25
            </h1>
          </div> */}
          <div className="video-container">
          <div className="text-layer">
            <h1 className="cognissance-3d shimmer-text">COGNISSANCE'25</h1>
          </div>
        </div>



        <div className="img-container">
          {/* <img src="/media/window.png" alt="" className="img" /> */}
          <img 
          src={isMobile ? "/media/window_mob1.png" : "/media/window.png"} 
          alt="Window Overlay" 
          className="img" 
          />
        </div>

        <div className="text-content">
          <div 
            className="img_txt" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: isMobile ? '20px' : '40px'
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

      {/* <section style={{ height: "1px" }} /> */}
      {/* <section><Events/></section> */}

    </div>
  );
};

export default HeroVideo;
