import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading-card">
      <h2>{title}</h2>
      <div className="heading-underline"></div>
    </div>
  );
};

export default Heading;
