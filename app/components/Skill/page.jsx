import Heading from "../Heading";
import Skill from "./Skill";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: "/html.png",
      rating: 100,
    },
    {
      name: "CSS",
      icon: "/css.png",
      rating: 95,
    },
    {
      name: "JavaScript",
      icon: "/js.png",
      rating: 90,
    },
    {
      name: "PHP",
      icon: "/php.png",
      rating: 90,
    },
    {
      name: "MySQL",
      icon: "/mysql.png",
      rating: 80,
    },
    {
      name: "Vue.js",
      icon: "/vue.png",
      rating: 80,
    },
    {
      name: "Nuxt.js",
      icon: "/nuxt.png",
      rating: 70,
    },
    {
      name: "React.js",
      icon: "/react.png",
      rating: 80,
    },
    {
      name: "Next.js",
      icon: "/next.png",
      rating: 70,
    },
    {
      name: "Flutter",
      icon: "/flutter.png",
      rating: 80,
    },
    {
      name: "Dart",
      icon: "/dart.png",
      rating: 70,
    },
    {
      name: "API",
      icon: "/api.png",
      rating: 90,
    },
    {
      name: "C++",
      icon: "/cpp.png",
      rating: 80,
    },
  ];

  return (
    <section id="skills" className="min-h-screen p-6 sm:py-24">
      <Heading>Skills</Heading>
      <div className="grid gap-4 grid-3">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
