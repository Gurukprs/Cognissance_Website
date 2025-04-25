import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroVideo from "../Components/HeroVideo";
import Events from "../Components/Events";

const Laptop = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    gsap.to(".img-container img", {
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

    gsap.to(".content-section .right", {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: "top 60%",
      },
    });

    gsap.to(".text-content", {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".video-section",
        start: "top top",        // when video-section hits top
        end: "bottom top",       // when it's fully scrolled out
        scrub: true,
      },
    });
    
    gsap.to(".content-section .left", {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: "top 60%",
      },
    });

    gsap.to(".text-layer", {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".video-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.to(".txt-bottom", {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: "top 60%",
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=250",
        scrub: 1,
        pin: true,
      },
    });

    timeline
      .from(".left-side div", {
        y: 150,
        opacity: 0,
        stagger: { amount: 1 },
        delay: 0.5,
      })
      .from(".right-side", { opacity: 0, duration: 2 }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <section className="video-section">
          <div className="img-container">
            <HeroVideo />
          </div>
        </section>
        <section className="content-section">
          <Events />
          <footer className="footer">
            <p>M.R.Prasanndh Raaju - 8946050246</p>
            <p>Rahulandiran M - 9629074704</p>
            <p>Divya K - 6374939491</p>
            <p>Dharaneesh S S - 7845759168</p>
            <p>Mathumathi M - 6369593242</p>
          </footer>
        </section>
      </div>

      <style>{`
  .wrapper {
    width: 100%;
  }

  footer {
  font-size: .5rem;
  }

  .video-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

  .img-container {
    width: 100%;
    height: 100%;
  }

  .video-container{
    top:15%;
  }
  .video-section video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }
  .text-content{
    z-index: 0;
  }
  .left{
    z-index: 2;
  }
    .img-container{
    z-index: 1;
    }
  .content-section {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    // z-index: 3;
  }

  .video-section {
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.content-section {
  position: relative;
  z-index: 2;
}

  .footer {
    background-color: #000;
    color: #fff;
    padding: 1.5rem;
    text-align: center;
  }
    .text-content {
    z-index: 3;
    }
  }

  
`}</style>

    </>
  );
};

export default Laptop;
