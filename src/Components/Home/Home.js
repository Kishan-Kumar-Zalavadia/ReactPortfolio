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
          <h4>a Web Developer.</h4>
          <p>
            I am an enthusiastic engineering fresher who is capable of using
            technical skills for the betterment of the organization. A
            bachelor’s degree in Software Engineering has enhanced my software
            skills and looking forward to work in a competitive environment that
            enhances overall learning.
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
