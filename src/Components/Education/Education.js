import React, { useState } from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Button from "../../Elements/Button/Button";
import Badge from "../../Elements/Badge/Badge";
import "./Education.css";
import Heading from "../../Elements/Heading/Heading";

const Education = () => {
  const [showCourses, setShowCourses] = useState(false);

  const courses = [
    "Software Engineering",
    "Computer Algorithms",
    "Graph Theory",
    "Automata Theory",
    "Machine Learning",
    "Database Systems",
    "Distributed and Parallel Databases",
    "Natural Language Processing",
    "Operating Systems",
    "Computer Networks",
  ];

  return (
    <div className="education-section" id="education">
      <Heading title={"Education"} />

      <div className="education-timeline">
        {/* Master’s */}
        <div className="timeline-item latest-card">
          <div className="timeline-dot"></div>
          <GlassCard className="education-card">
            <h3>
              University of North Texas, USA{" "}
              <span className="latest-badge">Latest</span>
            </h3>
            <p className="degree">
              Master of Science, Computer Science (Aug 2023 – May 2025)
            </p>
            <p className="gpa">GPA: 4/4</p>
            <Button text="View Courses" onClick={() => setShowCourses(true)} />
          </GlassCard>
        </div>

        {/* BTech */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <GlassCard className="education-card">
            <h3>Sphoorthy Engineering College, India</h3>
            <p className="degree">
              BTech, Computer Science & Engineering (Jun 2018 – Aug 2022)
            </p>
            <p className="gpa">CGPA: 7.6/10</p>
          </GlassCard>
        </div>
      </div>

      {/* Popup Modal for Courses */}
      {showCourses && (
        <div className="modal-overlay" onClick={() => setShowCourses(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h3>Master’s Courses</h3>

            <div className="courses-list">
              {courses.map((course, index) => (
                <Badge key={index} text={course} />
              ))}
            </div>

            <Button
              text="Close"
              onClick={() => setShowCourses(false)}
              type="secondary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
