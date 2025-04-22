import React, { useEffect, useState } from "react";
import Laptop from "./Laptop";
import Mobile from "./Mobile";

const Controller = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile((prev) => {
        if (prev !== isNowMobile) return isNowMobile;
        return prev;
      });
    };
  
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  

  return isMobile ? <Mobile /> : <Laptop />;
};

export default Controller;
