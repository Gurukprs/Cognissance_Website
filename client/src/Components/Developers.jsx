import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../CSS/Developers.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    name: "Guruprasaath S",
    year: "III",
    department: "CSE",
    executiveMember: true,
    executiveRole: "Treasurer CSEA",
    bio: "Frontend specialist with 8 years of experience in React and modern JavaScript frameworks. Expert in creating responsive, accessible user interfaces.",
    image: "/images/guru.jpg",
    skills: ["React", "TypeScript", "UI/UX", "GraphQL"]
  },
  {
    id: 2,
    name: "Megha E G",
    year: "II",
    department: "CSE",
    executiveMember: true,
    executiveRole: "CSEA Newsletter Team",
    bio: "Creative designer passionate about crafting intuitive user experiences and beautiful interfaces that solve real user problems.",
    image: "/images/megha.jpg",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"]
  },
  {
    id: 3,
    name: "Obu Preethi G",
    year: "II",
    department: "CSE",
    executiveMember: true,
    executiveRole: "Executive Member CCC",
    bio: "Systems architect with expertise in scalable cloud solutions and performance optimization for high-traffic applications.",
    image: "/images/preethi.jpg",
    skills: ["Node.js", "AWS", "Databases", "System Architecture"]
  },
  {
    id: 4,
    name: "Dharaneesh S S",
    year: "II",
    department: "CSE",
    executiveMember: true,
    executiveRole: "Executive Member CCC",
    bio: "Agile expert who excels at coordinating cross-functional teams and delivering complex projects on time and within budget.",
    image: "/images/dharaneesh.jpg",
    skills: ["Agile", "Scrum", "Team Leadership", "Strategic Planning"]
  }
];

function Developers() {
  const headerRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerSubtitleRef = useRef(null);
  const teamRef = useRef(null);
  const memberRefs = useRef([]);
  const mouseCursorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement across the entire page
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update state with normalized mouse position (0-100%)
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      
      // Apply to CSS variable for the global mouse tracking effect
      if (mouseCursorRef.current) {
        mouseCursorRef.current.style.setProperty('--x', `${e.clientX}px`);
        mouseCursorRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Modified header pinning to ensure it's always visible
    // Remove the ScrollTrigger that was unpinning the header
    
    // Instead, make the header permanently fixed at the top with a higher z-index
    gsap.set(headerRef.current, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      //background: "linear-gradient(to bottom, var(--bg-primary) 70%, rgba(10, 12, 20, 0.8) 100%)"
    });
    
    // Add padding to the main content to prevent it from being hidden under the fixed header
    gsap.set(".team-section", {
      paddingTop: "220px" // Adjust based on header height
    });
    
    // Header elements animation
    gsap.from(headerTitleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3
    });
    
    gsap.from(headerSubtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5
    });

    // Enhanced card animations with dramatic staggered reveal
    memberRefs.current.forEach((member, index) => {
      if (member) {
        // Ensure all cards are 100% visible by default
        gsap.set(member, { opacity: 1 });
        
        // More dramatic entrance animation
        gsap.from(member, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.3 + (0.15 * index),
          ease: "power3.out",
          scrollTrigger: {
            trigger: member,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // Enhanced background animations
    gsap.to('.circle-bg', {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });
    
    gsap.to('.circle-bg-2', {
      rotation: -360,
      duration: 100,
      repeat: -1,
      ease: "none"
    });
    
    gsap.to('.circle-bg-3', {
      rotation: 180,
      duration: 80,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });
  }, []);

  const handleMouseMove = (e, memberId) => {
    const memberCard = memberRefs.current[memberId - 1];
    if (memberCard) {
      const rect = memberCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Enhanced highlight effect with better responsiveness and visibility
      gsap.to(memberCard.querySelector('.card-highlight'), {
        opacity: 0.7,
        x: x,
        y: y,
        scale: 1.5,
        duration: 0.4,
        ease: "power2.out"
      });
      
      // Enhanced 3D tilt effect with better responsiveness
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      gsap.to(memberCard, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000
      });
      
      // Ensure text elements increase in visibility on hover
      const textElements = memberCard.querySelectorAll('h2, h3, p, .executive-badge');
      gsap.to(textElements, {
        color: "#ffffff",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
      });
      
      // Animate portfolio button
      const portfolioButton = memberCard.querySelector('.portfolio-btn');
      gsap.to(portfolioButton, {
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(128, 87, 255, 0.5)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (memberId) => {
    const memberCard = memberRefs.current[memberId - 1];
    if (memberCard) {
      // Reset card to original position smoothly
      gsap.to(memberCard, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.to(memberCard.querySelector('.card-highlight'), {
        opacity: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Reset text elements to original appearance
      const h2Elements = memberCard.querySelectorAll('h2');
      const h3Elements = memberCard.querySelectorAll('h3');
      const pElements = memberCard.querySelectorAll('p');
      const executiveBadge = memberCard.querySelectorAll('.executive-badge');
      
      gsap.to(h2Elements, {
        color: "var(--text-primary)",
        textShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to(h3Elements, {
        color: "var(--accent-secondary)",
        textShadow: "none",
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to(pElements, {
        color: "var(--text-secondary)",
        textShadow: "none",
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to(executiveBadge, {
        color: "#ffffff",
        textShadow: "none",
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Reset portfolio button
      const portfolioButton = memberCard.querySelector('.portfolio-btn');
      gsap.to(portfolioButton, {
        scale: 1,
        boxShadow: "0 5px 15px rgba(128, 87, 255, 0.3)",
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <div className="app">
      {/* Global mouse-following gradient */}
      <div ref={mouseCursorRef} className="mouse-cursor-gradient-tracking"></div>
      
      {/* Enhanced background circles */}
      <div className="circle-bg"></div>
      <div className="circle-bg circle-bg-2"></div>
      <div className="circle-bg circle-bg-3"></div>
      
     <main>
        <section ref={teamRef} className="team-section">
          <div className="team-grid">
            {/* Single row with 4 cards */}
            <div className="team-row">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  ref={el => memberRefs.current[member.id - 1] = el}
                  className="member-card"
                  onMouseMove={(e) => handleMouseMove(e, member.id)}
                  onMouseLeave={() => handleMouseLeave(member.id)}
                >
                  <div className="card-highlight"></div>
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="member-info">
                    <h2>{member.name}</h2>
                    <div className="member-details">
                      <h3>{member.year} • {member.department}</h3>
                      {member.executiveMember && (
                        <span className="executive-badge">{member.executiveRole}</span>
                      )}
                    </div>
                    <p>{member.bio}</p>
                    
                    <div className="portfolio-container">
                      <button className="portfolio-btn">View Portfolio</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; Designed and Maintained by Cognissance team</p>
      </footer>
    </div>
  );
}

export default Developers;