import { MoveRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border p-6 rounded-md flex flex-col content-start hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
      <div className="text-xl font-[500] mb-1">{project.title}</div>
      <div className="text mb-3">{project.description}</div>
      <div className="flex flex-wrap gap-2 items-start mb-3">
        {project.skills.split(",").map((skill, index) => (
          <div
            key={index}
            className="text-xs px-3 py-2 rounded bg-zinc-200 dark:bg-zinc-900"
          >
            {skill}
          </div>
        ))}
      </div>

      <a
        className="flex mt-auto items-center gap-2 hover:gap-3 transition-all text-sm "
        href={project.url}
        target="_blank"
      >
        Visit website <MoveRight />
      </a>
    </div>
  );
};

export default ProjectCard;
