import Heading from "./Heading";

const AboutSection = () => {
  return (
    <section id="about" className="p-6 sm:py-24 min-h-screen flex flex-col">
      <Heading>About</Heading>
      <div className="max-w-[800px] mx-auto flex-1 flex items-center">
        <p className="text-xl border-l dark:border-zinc-800 p-6 sm:p-16 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors duration-200">
          Highly skilled and results-driven Full-Stack Developer with 5+ years
          of hands-on experience crafting robust and scalable web applications.
          Proficient in PHP (5+ years), Vue.js, Nuxt.js, and Flutter(1+ years),
          I bring a comprehensive skill set to the table, enabling me to design
          and implement end-to-end solutions that meet client requirements and
          industry standards.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
