import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import "./NavBar.css";
import profileLogo from "../../component-old/pic/logo.jpeg";

const NavBar = () => {
  return (
    <GlassCard className="navbar">
      <div className="navbar-left">
        <img src={profileLogo} alt="Profile" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact Me</a>
      </div>
    </GlassCard>
  );
};

export default NavBar;
