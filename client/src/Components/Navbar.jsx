import React, { useState, useEffect } from 'react';
import '../style.css';

function Navbar() {
  const [timeLeft, setTimeLeft] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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
    updateTimer();

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <header>
      <nav className="navbar">
  <span></span>
  
  <div className="logo">CSEA & CCC</div>

  {/* Hamburger appears only on mobile */}
  <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <ul className={`menu ${menuOpen ? 'open' : ''}`}>
    <li><a href="laptop">Home</a></li>
    <li><a href="second">Events</a></li>
    <li><a href="developers">Developers</a></li>
  </ul>

  <div className="btn">{timeLeft}</div>
</nav>

    </header>
  );
}

export default Navbar;
