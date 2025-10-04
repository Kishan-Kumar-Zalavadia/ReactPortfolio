import React from "react";
import GlassCard from "../../Elements/GlassCard/GlassCard";
import Heading from "../../Elements/Heading/Heading";
import "./Home.css";
import profilePicture from "../../component-old/pic/hero.jpeg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      {/* <Heading title="Home" /> */}
      <div className="home-container">
        <GlassCard className="home-intro">
          <h3>Hi, I’m Kishan Kumar</h3>
          <h4>a Software Developer.</h4>
          <p>
            I’m a results-driven Software Engineer passionate about building
            high-performance, user-centric web applications. With expertise in
            full-stack development using Java, Spring Boot, ASP.NET, Angular,
            ReactJS, and MySQL, I thrive on solving complex problems and
            delivering scalable, efficient solutions.
          </p>

          <p>
            I have hands-on experience working on diverse projects, from machine
            learning research and predictive modeling to developing interactive
            web applications and SaaS platforms. Whether contributing to
            cutting-edge research at the University of North Texas or optimizing
            enterprise applications during my internships, I focus on
            innovation, precision, and collaboration.
          </p>

          <p>
            Driven by curiosity and a commitment to continuous learning, I enjoy
            pushing the boundaries of my skills and leveraging technology to
            create impactful solutions. Explore my portfolio to see my projects,
            experiences, and contributions in software engineering, full-stack
            development, and machine learning.
          </p>
        </GlassCard>

        <GlassCard className="home-image">
          <img src={profilePicture} alt="Kishan Kumar" />
        </GlassCard>
      </div>
    </section>
  );
};

export default Home;
