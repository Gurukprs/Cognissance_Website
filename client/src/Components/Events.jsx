// Events.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

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
      const direction = index % 2 === 0 ? "-150%" : "150%"; // Alternate slide-in direction

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
    <EventsContainer>
      <SectionTitle>PAPER AND PROJECT</SectionTitle>
      {events.slice(5, 7).map((event, index) => (
        <EventCard
          key={event.id}
          ref={(el) => (eventsRef.current[index] = el)}
          style={{
            "--hover-bg": event.bgColor,
            "--hover-shadow": event.bgColor + "CC",
          }}
        >
          <EventImage>
            <img src={event.image} alt={event.name} />
          </EventImage>
          <EventDetails>
            <EventTitle>{event.name}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
            <RegisterBtn href={`/register/${event.name.toLowerCase().replace(/\s+/g, "-")}`}>Register Now</RegisterBtn>
          </EventDetails>
        </EventCard>
      ))}
  
      <SectionTitle>Technical Events</SectionTitle>
      {events.slice(0, 3).map((event, index) => (
        <EventCard
          key={event.id}
          ref={(el) => (eventsRef.current[index + 2] = el)} // update the index offset to avoid ref conflict
          style={{
            "--hover-bg": event.bgColor,
            "--hover-shadow": event.bgColor + "CC",
          }}
        >
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
}
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
  opacity: 0;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    background: var(--hover-bg);
    transform: scale(1.08);
    box-shadow: 0px 12px 24px var(--hover-shadow);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const EventImage = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.5s ease, filter 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.2);
  }
`;

const EventDetails = styled.div`
  flex: 2;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const EventTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const EventDescription = styled.p`
  font-size: 1.4rem;
  margin-bottom: 25px;
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

  &:hover {
    background-color: #333;
  }
`;

export default Events;
