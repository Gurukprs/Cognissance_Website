import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "./CSS/Events.css";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, type: "Technical", name: "Coding Contest", description: "...", image: "/media/image.png" },
  { id: 2, type: "Technical", name: "Hackathon", description: "...", image: "/media/image.png" },
  { id: 3, type: "Technical", name: "Debugging Challenge", description: "...", image: "/media/image.png" },
  { id: 4, type: "Technical", name: "Machine Learning Challenge", description: "...", image: "/media/image.png" },
  { id: 5, type: "Technical", name: "App Development Challenge", description: "...", image: "/media/image.png" },
  { id: 6, type: "Non-Technical", name: "Quiz Bowl", description: "...", image: "/media/image.png" },
  { id: 7, type: "Non-Technical", name: "Public Speaking", description: "...", image: "/media/image.png" },
  { id: 8, type: "Non-Technical", name: "Photography Contest", description: "...", image: "/media/image.png" },
  { id: 9, type: "Non-Technical", name: "Debate Championship", description: "...", image: "/media/image.png" },
  { id: 10, type: "Non-Technical", name: "Art and Craft Exhibition", description: "...", image: "/media/image.png" },
];

const Events = () => {
  const eventsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    eventsRef.current.forEach((event, index) => {
      const direction = index % 2 === 0 ? "-150%" : "150%";
      const animation = gsap.fromTo(
        event,
        { opacity: 0, x: direction, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: event,
            start: "top 85%",
            end: "top 15%",
            scrub: 1,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
          },
        }
      );
      event.animation = animation;
    });

    return () => {
      eventsRef.current.forEach((event) => {
        if (event.animation) event.animation.kill();
      });
    };
  }, []);

  const redirectToForm = (event) => {
    const eventPath = event.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/register/${eventPath}`);
  };

  return (
    <div className="events-container">
      <h2 className="section-title">Events</h2>
      {events.map((event, index) => (
        <div
          key={event.id}
          className="event-card"
          ref={(el) => (eventsRef.current[index] = el)}
        >
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event-details">
            <h3 className="event-title">{event.name}</h3>
            <p className="event-description">{event.description}</p>

{/* Open in same page */}
            {/* <button
              className="register-btn"
              onClick={() => redirectToForm(event)}
            >
              Register Now
            </button> */}

            <a
              className="register-btn"
              href={`/register/${event.name.toLowerCase().replace(/\s+/g, "-")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
