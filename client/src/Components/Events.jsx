// Events.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../CSS/Events.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Event data
const events = [
  { id: 1, type: "Technical", name: "Tech Quest Challenge", description: "Test your tech knowledge and compete with others in our fast-paced quiz event.", image: "/media/techquest.png", bgColor: "#004e92" },
  { id: 2, type: "Technical", name: "Web Nest", description: "Create visually stunning websites and showcase your design skills in our web design challenge", image: "/media/webnest.jpg", bgColor: "#004e92" },
  { id: 3, type: "Technical", name: "Brain Fryer", description: "Write code, solve problems, and prove your programming skills in our coding competition", image: "/media/brainfryer.jpg", bgColor: "#004e92" },
  { id: 4, type: "Technical", name: "Machine Learning Challenge", description: "Build machine learning models to solve data-related problems.", image: "/media/image.png", bgColor: "#004e92" },
  { id: 5, type: "Technical", name: "App Development Challenge", description: "Create an app in a limited time using the latest frameworks and tools.", image: "/media/image.png", bgColor: "#004e92" },
  { id: 6, type: "Non-Technical", name: "Paper Forge", description: "It is a paper presentation event to present your research, showcase your ideas, and compete with peers.", image: "/media/paperforge.jpg", bgColor: "#8D4B2A" },
  { id: 7, type: "Non-Technical", name: "Pitch Project", description: "It is a project presentation event to showcase innovative projects, share solutions, and demonstrate expertise.", image: "/media/pitchproject.jpg", bgColor: "#8D4B2A" },
  { id: 8, type: "Non-Technical", name: "Photography Contest", description: "Showcase your photography skills with a theme-based competition.", image: "/media/image.png", bgColor: "#8D4B2A" },
  { id: 9, type: "Non-Technical", name: "Debate Championship", description: "Engage in structured debates on various contemporary issues.", image: "/media/image.png", bgColor: "#8D4B2A" },
  { id: 10, type: "Non-Technical", name: "Art and Craft Exhibition", description: "Display your creativity and artistic skills through various art forms.", image: "/media/image.png", bgColor: "#8D4B2A" },
];

const Events = () => {
  const eventsRef = useRef([]);

  useEffect(() => {
    eventsRef.current.forEach((event, index) => {
      const direction = index % 2 === 0 ? "-150%" : "150%";
      gsap.fromTo(
        event,
        { opacity: 0, x: direction, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: event,
            start: "top 85%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="events-container">
      <h2 className="section-title">PAPER AND PROJECT</h2>
      {events.slice(5, 7).map((event, index) => (
        <div
          key={event.id}
          className="event-card"
          ref={(el) => (eventsRef.current[index] = el)}
          style={{
            "--hover-bg": event.bgColor,
            "--hover-shadow": event.bgColor + "CC",
          }}
        >
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event-details">
            <h3 className="event-title">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <a className="register-btn" href={`/register/${event.name.toLowerCase().replace(/\s+/g, "-")}`}>Register Now</a>
          </div>
        </div>
      ))}

      <h2 className="section-title">Technical Events</h2>
      {events.slice(0, 3).map((event, index) => (
        <div
          key={event.id}
          className="event-card"
          ref={(el) => (eventsRef.current[index + 2] = el)}
          style={{
            "--hover-bg": event.bgColor,
            "--hover-shadow": event.bgColor + "CC",
          }}
        >
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event-details">
            <h3 className="event-title">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <a className="register-btn" href="#register">Register Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;