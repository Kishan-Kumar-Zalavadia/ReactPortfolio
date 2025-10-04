import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  type = "primary",
  fullWidth = false,
  halfWidth = false,
}) => {
  return (
    <button
      className={`custom-btn ${type} ${fullWidth ? "full-width" : ""} ${
        halfWidth ? "half-width" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
