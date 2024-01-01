import Heading from "../Heading";
import ProjectCard from "./Card";

const ProjectSection = () => {
  const projects = [
    {
      title: "Live HTML,CSS editor",
      description:
        "It is a web editor that gives you real time output of your html, css, and javascript code. It can be used for beginners to learn web development. ",
      skills: "HTML, CSS, JavaScript",
      url: "https://uroojk844.github.io/webeditor/",
    },
    {
      title: "Ahead app website",
      description:
        "It is single page website developed by using Nuxt.js and GSAP animation library.",
      skills: "HTML, CSS, JavaScript, Vue.js, Nuxt.js, GSAP",
      url: "https://magnificent-platypus-0ed517.netlify.app/",
    },
    {
      title: "Windows 11 clone",
      description:
        "Web based windows 11 Clone with multiple app like calendar, calculator, notepad, etc. Password: 123",
      skills: "HTML, CSS, JavaScript, Vue.js",
      url: "https://strong-griffin-e6167f.netlify.app/",
    },
    {
      title: "Weather app",
      description:
        "A weather forcasting app with beautiful UI developed by using HTML,CSS, JavaSript, and Vue.js.",
      skills: "HTML, CSS, JavaScript, Vue.js, API",
      url: "https://uroojk844.github.io/weather-app/",
    },
    {
      title: "Whatsapp Clone",
      description:
        "Whatsapp UI Clone app developed using dart and flutter. It includes Home, Status, Chat, Call, etc",
      skills: "Flutter, Dart, API",
      url: "https://steady-gingersnap-6ebe91.netlify.app/",
    },

    {
      title: "Live Tic-tac-Toe game",
      description:
        "Tic-tac-Toe game developed by flutter & dart.Currently, I'm working on online playing functionality.",
      skills: "Flutter, Dart, Provider, Firebase, Google Auth",
      url: "https://whimsical-lebkuchen-7cbc7e.netlify.app/",
    },

    {
      title: "Language Translator",
      description:
        "Language translator app using Google translate API. It support all languages and also auto-detects language.",
      skills: "Flutter, Dart, API",
      url: "https://tourmaline-phoenix-a9ad16.netlify.app/",
    },
    {
      title: "Track Slider Flutter Package",
      description:
        "It is flutter slider widget with beautiful UI and a lot of customizations. It is published on pub.dev website.",
      skills: "Flutter, Dart",
      url: "https://pub.dev/packages/track_slider",
    },
    {
      title: "Recipe finder",
      description:
        "It is flutter app to find the recipe of different food with ingredients and step by step precedure.",
      skills: "Flutter, Dart, API",
      url: "https://uroojk844.github.io/RecipeFinder/",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 min-h-screen">
      <Heading>Projects</Heading>
      <div className="grid gap-6 grid-3">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
