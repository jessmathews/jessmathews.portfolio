import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-5xl text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-[#38B2AC]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-[#339933]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-5xl text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-5xl text-[#F24E1E]" /> },
  ];

  return (
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
  );
};

export default SkillsSection;
