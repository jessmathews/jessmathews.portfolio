import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A comprehensive e-commerce dashboard with real-time analytics and inventory management.",
      tech: ["Next.js", "Tailwind", "React Query"],
      github: "https://github.com/jessmathews",
      live: "#",
    },
    {
      title: "Project Beta",
      description: "An interactive educational platform featuring live code execution and video streaming.",
      tech: ["React", "Node.js", "WebSockets"],
      github: "https://github.com/jessmathews",
      live: "#",
    },
    {
      title: "Project Gamma",
      description: "A minimalist task management tool with drag-and-drop functionality and offline support.",
      tech: ["Next.js", "Framer Motion", "Supabase"],
      github: "https://github.com/jessmathews",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-primary px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all flex flex-col"
            >
              {/* Placeholder Image Area */}
              <div className="h-48 bg-linear-to-br from-white/10 to-transparent w-full flex items-center justify-center p-4 text-center">
                <span className="text-gray-500 font-mono text-xs sm:text-sm">Project Image Placeholder</span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
