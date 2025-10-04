// Components/ScrollIndicator/ScrollIndicator.jsx
import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-indicator"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
};

export default ScrollIndicator;
