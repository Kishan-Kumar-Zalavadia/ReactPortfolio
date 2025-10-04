import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experiences from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Elements/ScrollToTop/ScrollToTop";
import ScrollIndicator from "./Elements/ScrollIndicator/ScrollIndicator";
import SocialIcons from "./Elements/SocialIcons/SocialIcons";

const App = () => {
  return (
    <div className="main-container">
      <ScrollIndicator />
      <NavBar />
      <Home />
      <Skills />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
      <ScrollToTop />
      <SocialIcons />
    </div>
  );
};

export default App;
