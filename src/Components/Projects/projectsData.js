import portfolio1Img from "./ProjectImages/portfolio1.png";
import portfolio2Img from "./ProjectImages/portfolio2.png";
import findImageImg from "./ProjectImages/findthepicture.png";
import gamingImg from "./ProjectImages/gaming.png";
import projectExpoImg from "./ProjectImages/projects.png";
import stickyNotesImg from "./ProjectImages/stickynotes.png";
import expenseTrackerImg from "./ProjectImages/expenseTracker.jpg";
import weatherAppImg from "./ProjectImages/weatherApp.jpg";
import ticTacToeImg from "./ProjectImages/tic-tac-toe.jpg";
import clockImg from "./ProjectImages/clock.jpg";

const projectsData = [
  {
    name: "Expense Tracker",
    image: expenseTrackerImg,
    link: "",
    github: "https://github.com/Kishan-Kumar-Zalavadia/Expense_Tracker",
    technologies: ["Html", "css", "Javascript"],
    description:
      "An expense tracking application to manage daily expenses and income, featuring visualizations with charts and category-wise summaries.",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: ticTacToeImg,
    link: "https://ourtictactoe.netlify.app/",
    github: "https://github.com/Kishan-Kumar-Zalavadia/Tic-Tac-Toe-Game",
    technologies: ["Angular", "Javascript", "Typescript", "CSS"],
    description:
      "An interactive two-player Tic-Tac-Toe game built with Angular, featuring multiple themes, win detection and reset options.",
  },
  {
    name: "Image Finder",
    image: findImageImg,
    link: "https://findtheimage.netlify.app/",
    github: "",
    technologies: ["ReactJS", "Unsplash API", "JavaScript"],
    description:
      "A web app that allows users to search and browse images in real time using the Unsplash API with a responsive gallery layout.",
  },
  {
    name: "Sticky Notes App",
    image: stickyNotesImg,
    link: "https://stickthenote.netlify.app/",
    github: "",
    technologies: ["ReactJS", "LocalStorage", "JavaScript"],
    description:
      "A sticky notes web app where users can create, edit, and delete notes. Notes persist using browser local storage.",
  },
  {
    name: "Weather App",
    image: weatherAppImg,
    link: "https://myweathercityapp.netlify.app/",
    github: "https://github.com/Kishan-Kumar-Zalavadia/Weather-App-Angular",
    technologies: [
      "Angular",
      "OpenWeather API",
      "Javascript",
      "Typescript",
      "CSS",
    ],
    description:
      "A weather forecasting web app that provides real-time weather conditions and forecasts using the OpenWeather API.",
  },
  {
    name: "Gaming Website Layout",
    image: gamingImg,
    link: "https://kkgaming.netlify.app/",
    github: "https://github.com/Kishan-Kumar-Zalavadia/gamingSite",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A gaming-themed website layout designed with vibrant UI elements, interactive sections, and modern styling.",
  },
  {
    name: "Portfolio Website - design 1",
    image: portfolio1Img,
    link: "https://kishankumarz.netlify.app/",
    github: "",
    technologies: ["ReactJS", "CSS", "Netlify"],
    description:
      "A personal portfolio website showcasing my education, skills, experience, and projects with a modern responsive design.",
  },
  {
    name: "My Portfolio Website - design 2",
    image: portfolio2Img,
    link: "https://kishankumarsite.netlify.app",
    github: "",
    technologies: ["ReactJS", "TailwindCSS", "Netlify"],
    description:
      "An alternate portfolio version with refined UI/UX, improved layouts, and modern styling using TailwindCSS.",
  },
  {
    name: "My Project Expo",
    image: projectExpoImg,
    link: "https://myprojectexpo.netlify.app/",
    github: "",
    technologies: ["ReactJS", "CSS", "JavaScript"],
    description:
      "A showcase site that displays a collection of my projects with categories and highlights for better presentation.",
  },
  {
    name: "Clock App",
    image: clockImg,
    link: "https://mytimeclock.netlify.app/",
    github: "https://github.com/Kishan-Kumar-Zalavadia/Clock",
    technologies: ["Angular", "Javascript", "Typescript", "CSS"],
    description:
      "A digital clock web application that displays the current time in real-time with a clean, minimal UI.",
  },
];

export default projectsData;
