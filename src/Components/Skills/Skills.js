import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import { languages, frameworks, concepts, softSkills } from "./Data/skillsData";
import "./Skills.css";
import Heading from "../../Elements/Heading/Heading";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Heading title={"Skills"}></Heading>
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
          <ul>
            {concepts.map((concept, index) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
        </GlassCard>

        {/* Soft Skills */}
        <GlassCard className="skills-card">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;
