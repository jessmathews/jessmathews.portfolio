import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#00c6b3"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={600}
    >
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ClickSpark>
  );
}
