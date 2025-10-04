import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experiences from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container">
      <NavBar />
      <Home />
      <Skills />
      <Education />
      <Experiences />
      <Projects />
      <Contact />

      {showScroll && (
        <div className="scroll-top" onClick={scrollToTop}>
          <div className="up-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default App;
