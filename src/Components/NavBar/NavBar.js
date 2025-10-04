import React, { useState } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import "./NavBar.css";
import profileLogo from "../../component-old/pic/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <a href="#certifications">Certifications</a>
        <a href="#contact-me">Contact Me</a>
      </div>

      {/* Hamburger menu button (visible on mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
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
          <a href="#certifications" onClick={toggleMenu}>
            Certifications
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
