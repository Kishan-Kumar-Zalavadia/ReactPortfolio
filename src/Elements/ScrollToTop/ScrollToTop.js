// Elements/ScrollToTop/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScroll) return null;

  return (
    <div className="scroll-top" onClick={scrollToTop}>
      <div className="up-arrow"></div>
    </div>
  );
};

export default ScrollToTop;
