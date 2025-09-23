import React from "react";
import "./GlassCard.css";

const GlassCard = ({ children, className }) => {
  return <div className={`glass-card ${className || ""}`}>{children}</div>;
};

export default GlassCard;
