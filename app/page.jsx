import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function Home() {
  const skills = [
    { name: "React", icon: <FaReact className="text-5xl text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-[#38B2AC]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-[#339933]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-5xl text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-5xl text-[#F24E1E]" /> },
  ];

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <GalaxyBackground />
        
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-accent">Jess Mathews</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Web Designer & Frontend Developer
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            I craft responsive, dynamic, and beautiful web experiences. 
            Passionate about bridging the gap between design and engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="#projects" 
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover transition-all"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent/10 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-24 bg-primary/95 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-accent">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-accent/50"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-24 bg-primary px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-accent">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all flex flex-col"
              >
                {/* Placeholder Image Area */}
                <div className="h-48 bg-gradient-to-br from-white/10 to-transparent w-full flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-sm">Project Image Placeholder</span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
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
                      <FaExternalLinkAlt className="text-lg" /> Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
