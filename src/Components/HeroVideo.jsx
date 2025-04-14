// Components/HeroVideo.jsx
import React from "react";
import Events from "./Events";

const HeroVideo = () => {
  return (
    <div className="wrapper">
      <section className="video-section">
        <div className="video-container">
          {/* <video src="/media/flower.mp4" loop muted autoPlay></video> */}
          <div className="centerizer">
          <h1 className="cognissance-3d">COGNISSANCE</h1>
          </div>
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
  );
};

export default HeroVideo;
