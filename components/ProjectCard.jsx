import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 h-full rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all flex flex-col group">
      {/* Placeholder Image Area */}
      <div className="h-48 bg-linear-to-br from-white/10 to-transparent w-full flex items-center justify-center p-4 text-center overflow-hidden">
        <span className="text-gray-500 font-mono text-xs sm:text-sm group-hover:scale-110 transition-transform duration-500">
          Project Image Placeholder
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col grow bg-primary/20 backdrop-blur-sm">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors"
          >
            <FaGithub className="text-lg" /> Code
          </Link>
          <Link
            href={project.live}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors"
          >
            <FaLink className="text-lg" /> Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
