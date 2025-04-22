import React, { useEffect, useState } from "react";
import '../CSS/CountdownTimer.css';

const CountdownTimer = ({ eventDate }) => {
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(eventDate);
      const diff = target - now;

      if (diff <= 0) {
        setIsStarted(true);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeUnits({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (isStarted) {
    return <h2 className="countdown-timer started">The event has started! 🎉</h2>;
  }

  return (
    <div className="countdown-container">
      <h2 className="countdown-header">Event Starts In</h2>
      <div className="countdown-units">
        <div className="time-unit">
          <span className="number">{timeUnits.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-unit">
          <span className="number">{timeUnits.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-unit">
          <span className="number">{timeUnits.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-unit">
          <span className="number">{timeUnits.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;