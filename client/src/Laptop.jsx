// Home.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroVideo from "./Components/HeroVideo";
import Events from "./Components/Events";

const Laptop = () => {
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

  return (
    <div className="wrapper">
      <section className="video-section">
        <HeroVideo />
      </section>
      <section>
        <Events />
      </section>
    </div>
  );
};

export default Laptop;
