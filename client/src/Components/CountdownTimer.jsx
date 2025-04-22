import React, { useEffect, useState } from "react";

const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(eventDate);
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("The event has started!");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return <h2 className="countdown-timer">Event starts in: {timeLeft}</h2>;
};

export default CountdownTimer;
