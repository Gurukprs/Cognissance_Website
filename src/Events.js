import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, type: "Technical", name: "Coding Contest", description: "Compete in a timed coding contest and solve algorithmic challenges.", image: "/media/image.png" },
  { id: 2, type: "Technical", name: "Hackathon", description: "Develop innovative solutions to real-world problems in teams.", image: "/media/image.png" },
  { id: 3, type: "Technical", name: "Debugging Challenge", description: "Test your debugging skills to fix code issues within a time limit.", image: "/media/image.png" },
  { id: 4, type: "Technical", name: "Machine Learning Challenge", description: "Build machine learning models to solve data-related problems.", image: "/media/image.png" },
  { id: 5, type: "Technical", name: "App Development Challenge", description: "Create an app in a limited time using the latest frameworks and tools.", image: "/media/image.png" },
  { id: 6, type: "Non-Technical", name: "Quiz Bowl", description: "Test your knowledge on a wide range of topics in a fast-paced quiz format.", image: "/media/image.png" },
  { id: 7, type: "Non-Technical", name: "Public Speaking", description: "Deliver an impactful speech on a topic of your choice.", image: "/media/image.png" },
  { id: 8, type: "Non-Technical", name: "Photography Contest", description: "Showcase your photography skills with a theme-based competition.", image: "/media/image.png" },
  { id: 9, type: "Non-Technical", name: "Debate Championship", description: "Engage in structured debates on various contemporary issues.", image: "/media/image.png" },
  { id: 10, type: "Non-Technical", name: "Art and Craft Exhibition", description: "Display your creativity and artistic skills through various art forms.", image: "/media/image.png" },
];

const Events = () => {
  const eventsRef = useRef([]);

  useEffect(() => {
    eventsRef.current.forEach((event, index) => {
      const direction = index % 2 === 0 ? "-150%" : "150%"; // Alternating slide-in direction

      gsap.fromTo(
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
            start: "top 85%", // Start when the element enters 85% of the viewport
            end: "top 15%", // End when it leaves 15% of the viewport
            scrub: 1, // Smoother sync with scroll
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
            markers: false, // Set to true for debugging
          },
        }
      );
    });
  }, []);

  return (
    <EventsContainer>
      <SectionTitle>Technical Events</SectionTitle>
      {events.slice(0, 5).map((event, index) => (
        <EventCard key={event.id} ref={(el) => (eventsRef.current[index] = el)}>
          <EventImage>
            <img src={event.image} alt={event.name} />
          </EventImage>
          <EventDetails>
            <EventTitle>{event.name}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <RegisterBtn href="#register">Register Now</RegisterBtn>
          </EventDetails>
        </EventCard>
      ))}

      <SectionTitle>Non-Technical Events</SectionTitle>
      {events.slice(5).map((event, index) => (
        <EventCard key={event.id} ref={(el) => (eventsRef.current[index + 5] = el)}>
          <EventImage>
            <img src={event.image} alt={event.name} />
          </EventImage>
          <EventDetails>
            <EventTitle>{event.name}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <RegisterBtn href="#register">Register Now</RegisterBtn>
          </EventDetails>
        </EventCard>
      ))}
    </EventsContainer>
  );
};

// Styled Components
const EventsContainer = styled.div`
  background-color: #121212;
  color: #f5f5f5;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 20px;
`;

const EventCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  opacity: 0; /* Hidden initially */
  transform: translateX(100%);
  transition: all 0.4s ease;

  &:hover {
    background: #004e92;
    transform: scale(1.08);
    box-shadow: 0px 12px 24px rgba(0, 78, 146, 0.8);
  }
`;

const EventImage = styled.div`
  flex: 1.2;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.5s ease-in-out, filter 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.2);
  }
`;

const EventDetails = styled.div`
  flex: 2;
  margin-left: 30px;
`;

const EventTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #d0d0d0;
`;

const EventDescription = styled.p`
  font-size: 1.4rem;
  margin-bottom: 25px;
  color: #c0c0c0;
`;

const RegisterBtn = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #000;
  color: #f5f5f5;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default Events;
