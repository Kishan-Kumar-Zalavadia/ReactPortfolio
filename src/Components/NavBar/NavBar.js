import React, { useState, useEffect } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import "./NavBar.css";
import profileLogo from "./logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Update CSS variables based on mode
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty(
        "--main-gradient",
        "linear-gradient(135deg, #0f0f0f, #1a1a1a, #000000, #141e30, #243b55)"
      );
      root.style.setProperty("--bg-color", "#000000");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--link-color", "#66b2ff");
      root.style.setProperty("--link-hover", "#99ccff");
      root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.08)");
      root.style.setProperty("--card-border", "rgba(255, 255, 255, 0.15)");
      root.style.setProperty("--card-shadow", "rgba(0, 0, 0, 0.6)");
    } else {
      root.style.setProperty(
        "--main-gradient",
        "linear-gradient(135deg, #ffffff, #f0f0f0, #e0e0e0, #cde1ff, #a0c4ff)"
      );
      root.style.setProperty("--bg-color", "#fdfdfd"); // main background
      root.style.setProperty("--text-color", "#1a1a1a"); // readable text
      root.style.setProperty("--link-color", "#1a73e8"); // normal link
      root.style.setProperty("--link-hover", "#0c59d1"); // hover link
      root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.3)"); // semi-transparent glass
      root.style.setProperty("--card-border", "rgba(0, 0, 0, 0.1)"); // subtle border
      root.style.setProperty("--card-shadow", "rgba(0, 0, 0, 0.15)"); // soft shadow
    }
  }, [darkMode]);

  return (
    <GlassCard className="navbar">
      <div className="navbar-left">
        <img src={profileLogo} alt="Profile" className="navbar-logo" />
      </div>

      {/* Desktop menu */}
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact Me</a>

        {/* Dark Mode Toggle for Desktop */}
        <div className="dark-mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider">
              <span className="icon dark">🌙</span>
              <span className="icon light">☀️</span>
            </span>
          </label>
        </div>
      </div>

      {/* Hamburger menu & mobile toggle */}
      <div className="hamburger-and-toggle">
        <div className="mobile-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider">
              <span className="icon dark">🌙</span>
              <span className="icon light">☀️</span>
            </span>
          </label>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#education" onClick={toggleMenu}>
            Education
          </a>
          <a href="#experience" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact-me" onClick={toggleMenu}>
            Contact Me
          </a>
        </div>
      )}
    </GlassCard>
  );
};

export default NavBar;
