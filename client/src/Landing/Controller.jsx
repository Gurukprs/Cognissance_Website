import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";
import Mobile from "./Mobile";

const Controller = () => {
  const [isMobile, setIsMobile] = useState(null); // Start as null

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (isMobile === null) return null; // Or show a loading spinner

  return isMobile ? <Mobile /> : <Laptop />;
};

export default Controller;
