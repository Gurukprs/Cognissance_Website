import React, { useEffect, useState } from "react";
import HeroVideo from "./Components/HeroVideo";
import Events from "./Components/Events";
import CountdownTimer from "./Components/CountdownTimer";
import "./CSS/Laptop.css";

const Laptop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="laptop-container">
      <section className="hero-section">
        <HeroVideo />
      </section>

      <section className={`countdown-section ${isVisible ? 'fade-in' : ''}`}>
        <CountdownTimer eventDate="2025-04-30T09:00:00" />
      </section>

      <section className="events-section">
        <Events />
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About Cognissance</h2>
          <p>Join us for the most anticipated technical symposium of the year!</p>
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <h3>5000+ Participants</h3>
            </div>
            <div className="feature-item">
              <i className="fas fa-trophy"></i>
              <h3>10+ Events</h3>
            </div>
            <div className="feature-item">
              <i className="fas fa-award"></i>
              <h3>₹1,00,000 Prize Pool</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laptop;