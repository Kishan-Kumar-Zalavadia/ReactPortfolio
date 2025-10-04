import React, { useState, useEffect } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import Button from "../../Elements/Button/Button";
import Badge from "../../Elements/Badge/Badge";
import { languages, frameworks } from "../Skills/skillsData";
import projectsData from "./projectsData";
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

  // Determine number of projects to show
  let limit = 8;
  if (screenWidth <= 768) limit = 3;
  else if (screenWidth < 960) limit = 4;
  else if (screenWidth < 1260) limit = 6;

  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, limit);

  return (
    <div className="projects-section" id="projects">
      <Heading title={"Projects"} />

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <GlassCard key={index} className="project-card">
            <div className="project-content">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-title">{project.name}</h3>

              <div className="project-tech">
                {project.technologies.map((tech, i) => {
                  const img = getSkillImage(tech);
                  return <Badge key={i} text={tech} img={img} />;
                })}
              </div>
            </div>

            <div className="project-buttons">
              <Button
                text="View Details"
                type="primary"
                fullWidth={true}
                onClick={() => setActiveProject(project)}
              />

              <div className="links-row">
                {project.link && (
                  <Button
                    text="Live"
                    type="primary"
                    halfWidth={!!project.github}
                    fullWidth={true}
                    onClick={() => window.open(project.link, "_blank")}
                  />
                )}
                {project.github && (
                  <Button
                    text="GitHub"
                    type="primary"
                    halfWidth={!!project.link}
                    fullWidth={true}
                    onClick={() => window.open(project.github, "_blank")}
                  />
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {projectsData.length > limit && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            text={showAll ? "View Less" : "View More"}
            type="primary"
            onClick={() => setShowAll(!showAll)}
          />
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
                return <Badge key={i} text={tech} img={img} />;
              })}
            </div>

            <p className="modal-description">{activeProject.description}</p>

            <Button
              text="Close"
              type="secondary"
              onClick={() => setActiveProject(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
