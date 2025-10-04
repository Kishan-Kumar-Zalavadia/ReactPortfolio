// Elements/SocialIcons/SocialIcons.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://linkedin.com/in/kishan-kumar-zalavadia/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Kishan-Kumar-Zalavadia/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
