import React, { useState } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import Button from "../../Elements/Button/Button"; // Import your custom Button
import experienceData from "./experienceData";
import { languages, frameworks } from "../Skills/skillsData";
import "./Experience.css";

// Utility: get image for skill
const getSkillImage = (skillName) => {
  const lang = languages.find(
    (l) => l.name.toLowerCase() === skillName.toLowerCase()
  );
  if (lang) return lang.img;

  const fw = frameworks.find(
    (f) => f.name.toLowerCase() === skillName.toLowerCase()
  );
  if (fw) return fw.img;

  return null;
};

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Determine which experiences to show
  const displayedExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <div className="experience-section" id="experience">
      <Heading title={"Experience"} />

      <div className="experience-timeline">
        {displayedExperiences.map((exp, index) => (
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
              <div className="experience-skills-card">
                <div className="skills-badges">
                  {exp.skills.map((skill, i) => {
                    const img = getSkillImage(skill);
                    return (
                      <div key={i} className="badge">
                        {img && (
                          <img src={img} alt={skill} className="badge-icon" />
                        )}
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Use custom Button component */}
              <Button
                className="full-width"
                onClick={() => setActiveExperience(exp)}
                type="primary"
                text="View Details"
              />
            </GlassCard>
          </div>
        ))}
      </div>

      {/* Toggle button for more/less */}
      {experienceData.length > 3 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            onClick={() => setShowAll(!showAll)}
            type="primary"
            className="full-width"
            text={showAll ? "View Less" : "View More"}
          />
        </div>
      )}

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
            {/* Close button uses secondary style */}
            <Button
              onClick={() => setActiveExperience(null)}
              type="secondary"
              className="full-width"
              text="Close"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
