import React, { useState } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import experienceData from "./experienceData";
import "./Experience.css";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  return (
    <div className="experience-section" id="experience">
      <Heading title={"Experience"} />

      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${exp.latest ? "latest-card" : ""}`}
          >
            <div className="timeline-dot"></div>
            <GlassCard className="experience-card">
              {/* Header with company-role and date */}
              <div className="card-header">
                <h3 className="company-role">
                  {exp.company} - {exp.role}{" "}
                  {exp.latest && <span className="latest-badge">Latest</span>}
                </h3>
                <span className="card-date">{exp.duration}</span>
              </div>

              {/* Location */}
              <p className="location">{exp.location}</p>

              {/* Skills badges */}
              <div className="skills-badges-container">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                className="details-btn"
                onClick={() => setActiveExperience(exp)}
              >
                View Details
              </button>
            </GlassCard>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeExperience && (
        <div
          className="modal-overlay"
          onClick={() => setActiveExperience(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>
              {activeExperience.role} @ {activeExperience.company}
            </h3>
            <p className="duration-location">
              {activeExperience.duration} | {activeExperience.location}
            </p>
            <ul className="highlights">
              {activeExperience.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              className="close-btn"
              onClick={() => setActiveExperience(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
