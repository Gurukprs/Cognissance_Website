import React, { useState, useEffect } from 'react';
import '../CSS/Events.css';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const events = [
    {
      id: 1,
      title: "Paper Presentation",
      category: "technical",
      image: "/media/paper.jpg",
      description: "Present your innovative ideas and research",
      prize: "₹10,000"
    },
    {
      id: 2,
      title: "Code Debug",
      category: "technical",
      image: "/media/debug.jpg",
      description: "Find and fix the bugs in given code",
      prize: "₹5,000"
    },
    // Add more events as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section className={`events-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Events</h2>
      
      <div className="category-filters">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Events
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveCategory('technical')}
        >
          Technical
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'non-technical' ? 'active' : ''}`}
          onClick={() => setActiveCategory('non-technical')}
        >
          Non-Technical
        </button>
      </div>

      <div className="events-grid">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <div className="event-overlay">
                <span className="prize-tag">{event.prize}</span>
              </div>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;