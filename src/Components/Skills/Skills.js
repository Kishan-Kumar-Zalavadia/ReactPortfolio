import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import { languages, frameworks, concepts, softSkills } from "./skillsData";
import Badge from "../../Elements/Badge/Badge";
import "./Skills.css";
import Heading from "../../Elements/Heading/Heading";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Heading title={"Skills"} />

      <div className="skills-container">
        {/* Languages */}
        <GlassCard className="skills-card">
          <h3>Languages</h3>
          <div className="skills-grid">
            {languages.map((lang, index) => (
              <div key={index} className="skill-item">
                <img src={lang.img} alt={lang.name} />
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Frameworks */}
        <GlassCard className="skills-card">
          <h3>Frameworks</h3>
          <div className="skills-grid">
            {frameworks.map((fw, index) => (
              <div key={index} className="skill-item">
                <img src={fw.img} alt={fw.name} />
                <span>{fw.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Concepts */}
        <GlassCard className="skills-card">
          <h3>Concepts</h3>
          <div className="skills-badges">
            {concepts.map((concept, index) => (
              <Badge key={index} text={concept} fullWidth />
            ))}
          </div>
        </GlassCard>

        {/* Soft Skills */}
        <GlassCard className="skills-card">
          <h3>Soft Skills</h3>
          <div className="skills-badges">
            {softSkills.map((skill, index) => (
              <Badge key={index} text={skill} fullWidth />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;
