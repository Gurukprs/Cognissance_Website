import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

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
  const [selectedEvent, setSelectedEvent] = useState(null);

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
            invalidateOnRefresh: true
          }
        }
      );
  
      // Store animation instance
      event.animation = animation;
    });
  
    return () => {
      eventsRef.current.forEach((event) => {
        if (event.animation) event.animation.kill();
      });
    };
  }, []);
  
  // Pause ScrollTrigger when popup is open
  useEffect(() => {
    if (selectedEvent) {
      ScrollTrigger.getAll().forEach(trigger => trigger.disable());
    } else {
      ScrollTrigger.getAll().forEach(trigger => trigger.enable());
    }
  }, [selectedEvent]);
  

  const openPopup = (event) => {
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };
  
  const closePopup = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling when popup closes
  };
  

  return (
    <>
      <EventsContainer>
        <SectionTitle>Technical Events</SectionTitle>
        {events.map((event, index) => (
          <EventCard key={event.id} ref={(el) => (eventsRef.current[index] = el)}>
            <EventImage>
              <img src={event.image} alt={event.name} />
            </EventImage>
            <EventDetails>
              <EventTitle>{event.name}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <RegisterBtn onClick={() => openPopup(event)}>Register Now</RegisterBtn>
            </EventDetails>
          </EventCard>
        ))}
      </EventsContainer>

      {selectedEvent && (
        <PopupOverlay onClick={closePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>×</CloseButton>
            <PopupImage src={selectedEvent.image} alt={selectedEvent.name} />
            <PopupContent>
              <PopupTitle>{selectedEvent.name}</PopupTitle>
              <PopupDescription>{selectedEvent.description}</PopupDescription>
              <PopupForm>
                <p>Registration form will appear here.</p>
              </PopupForm>
            </PopupContent>
          </PopupCard>
        </PopupOverlay>
      )}
    </>
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
  transition: all 0.4s ease;
  &:hover {
    background: #004e92;
    transform: scale(1.08);
  }
`;

const EventImage = styled.div`
  flex: 1.2;
  img {
    width: 100%;
    border-radius: 15px;
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

const RegisterBtn = styled.button`
  padding: 15px 30px;
  background-color: #000;
  color: #f5f5f5;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;

// Popup Styles
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;  /* Increase to make sure it's above everything */
`;


const PopupCard = styled.div`
  background: #1e1e1e;
  color: #fff;
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  position: relative;
  animation: zoomIn 0.3s ease-out;

  @keyframes zoomIn {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

const PopupImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PopupContent = styled.div`
  margin-top: 20px;
`;

const PopupTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #f5f5f5;
`;

const PopupDescription = styled.p`
  font-size: 1.3rem;
  color: #c0c0c0;
`;

const PopupForm = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #292929;
  border-radius: 10px;
`;

export default Events;
