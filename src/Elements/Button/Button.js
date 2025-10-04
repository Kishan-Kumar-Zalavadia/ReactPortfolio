import React from "react";
import "./Button.css";

const Button = ({ text, onClick, type = "primary", fullWidth = false }) => {
  return (
    <button
      className={`custom-btn ${type} ${fullWidth ? "full-width" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
