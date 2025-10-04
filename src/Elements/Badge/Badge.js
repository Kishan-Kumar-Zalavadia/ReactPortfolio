import React from "react";
import "./Badge.css";

const Badge = ({ text, img, alt, fullWidth = false }) => {
  return (
    <div className={`badge ${fullWidth ? "full-width" : ""}`}>
      {img && <img src={img} alt={alt || text} className="badge-img" />}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
