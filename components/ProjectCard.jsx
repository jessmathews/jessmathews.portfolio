import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const githubMatch = project.github?.match(/github\.com\/([^/]+\/[^/#?]+)/);
  const imageUrl = githubMatch ? `https://opengraph.githubassets.com/1/${githubMatch[1]}` : null;

  return (
    <div className="bg-white/5 h-full rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all flex flex-col group">
      {/* Image Area */}
      <div className="h-40 sm:h-48 w-full flex items-center justify-center bg-white/5 relative overflow-hidden shrink-0">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={project.title}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-gray-500 font-mono text-xs sm:text-sm group-hover:scale-110 transition-transform duration-500 p-4 text-center">
            Project Image Placeholder
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col grow bg-primary/20 backdrop-blur-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight">{project.title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 grow line-clamp-3 sm:line-clamp-none">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] sm:text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-4 mt-auto">
          {project.github && project.github !== "#" && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-accent transition-colors"
            >
              <FaGithub className="text-base sm:text-lg" /> Code
            </Link>
          )}
          {project.live && project.live !== "#" && (
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-accent transition-colors"
            >
              <FaLink className="text-base sm:text-lg" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
