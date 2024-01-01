import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import ProjectSection from "./components/Project/page";
import SkillsSection from "./components/Skill/page";

const Home = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
