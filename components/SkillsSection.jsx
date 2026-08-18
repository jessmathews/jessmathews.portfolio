import LogoLoop from "@/components/LogoLoop";

const SkillsSection = () => {
  const mySkills = [
"react", "next", "tailwind", "nodejs", "js",
"figma", "java", "python", "c", "cpp", "git",
"docker", "mongodb", "postgres", "supabase", "ros",
"flask", "nextjs", "vite", "blender", "arduino",
"raspberrypi", "linux", "aws", "html", "css",
"nginx"
  ];

  const allLogos = mySkills.map(slug => ({
    src: `https://skillicons.dev/icons?i=${slug}`,
    alt: slug
  }));

  const itemsPerRow = Math.ceil(allLogos.length / 3);
  const row1 = allLogos.slice(0, itemsPerRow);
  const row2 = allLogos.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = allLogos.slice(itemsPerRow * 2);

  return (
    <section id="skills" className="w-full py-24 bg-primary/95 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center">
          My <span className="text-accent">Skills</span>
        </h2>
      </div>
        
      <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto">
        <LogoLoop
          logos={row1}
          speed={40}
          direction="left"
          logoHeight={64}
          gap={80}
          fadeOut
          fadeOutColor="#0e1012"
          scaleOnHover
          hoverSpeed={10}
        />
        
        <LogoLoop
          logos={row2}
          speed={40}
          direction="right"
          logoHeight={64}
          gap={80}
          fadeOut
          fadeOutColor="#0e1012"
          scaleOnHover
          hoverSpeed={10}
        />
        
        <LogoLoop
          logos={row3}
          speed={40}
          direction="left"
          logoHeight={64}
          gap={80}
          fadeOut
          fadeOutColor="#0e1012"
          scaleOnHover
          hoverSpeed={10}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
