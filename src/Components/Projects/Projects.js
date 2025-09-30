import React, { useState } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import { languages, frameworks } from "../Skills/Data/skillsData";
import "./Projects.css";
import projectsData from "./projectsData";

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

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-section" id="projects">
      <Heading title={"Projects"} />

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <GlassCard key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>

            {/* Tech badges */}
            <div className="project-tech">
              {project.technologies.map((tech, i) => {
                const img = getSkillImage(tech);
                return (
                  <div key={i} className="badge">
                    {img && <img src={img} alt={tech} className="badge-icon" />}
                    {tech}
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="project-buttons">
              <button
                className="details-btn full-width"
                onClick={() => setActiveProject(project)}
              >
                View Details
              </button>

              <div className="links-row">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`details-btn ${
                      project.github ? "half-width" : "full-width"
                    }`}
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`details-btn ${
                      project.link ? "half-width" : "full-width"
                    }`}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{activeProject.name}</h3>
            <div className="modal-badges">
              {activeProject.technologies.map((tech, i) => {
                const img = getSkillImage(tech);
                return (
                  <div key={i} className="badge">
                    {img && <img src={img} alt={tech} className="badge-icon" />}
                    {tech}
                  </div>
                );
              })}
            </div>
            <p className="modal-description">{activeProject.description}</p>
            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
