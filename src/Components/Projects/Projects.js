import React, { useState, useEffect } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import { languages, frameworks } from "../Skills/Data/skillsData";
import projectsData from "./projectsData"; // your projectsData.js
import "./Projects.css";

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
  const [showAll, setShowAll] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine number of projects to show based on screen width
  let limit = 8; // desktop default
  if (screenWidth <= 768) limit = 3; // mobile
  else if (screenWidth < 960) limit = 4; // medium/tablet
  else if (screenWidth < 1260) limit = 6; // medium/tablet

  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, limit);

  return (
    <div className="projects-section" id="projects">
      <Heading title={"Projects"} />

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <GlassCard key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>

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

      {/* Toggle button for more/less */}
      {projectsData.length > limit && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="details-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

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
