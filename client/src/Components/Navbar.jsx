import React, { useState, useEffect } from 'react';

function Navbar() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('April 30, 2025 12:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('Time’s up!');
        clearInterval(timerInterval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // initial call

    return () => clearInterval(timerInterval); // cleanup
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <span> </span>
          <div className="logo">CSEA & CCC</div>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="btn">{timeLeft}</div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
