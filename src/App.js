import React from "react";
// import Header from "./component/Head/Header";
// import Features from "./component/Features/Features";
// import Home from "./component/Hero/Home";
// import Portfolio from "./component/Portfolio/Portfolio";
// import Resume from "./component/Resume/Resume";
// import Testimonial from "./component/Testimonial/Testimonial";
// import Blog from "./component/Blog/Blog";
// import Contact from "./component/Contact/Contact";
// import Footer from "./component/Footer/Footer";
import "./App.css";
import GlassCard from "./Elements/GlassCard/GlassCard";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <Home />
      </div>
    </>
  );
};

export default App;
