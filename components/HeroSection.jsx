import Link from "next/link";
import GalaxyBackground from "@/components/GalaxyBackground";

const HeroSection = () => {
  return (
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
            href="/#contact" 
            className="px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent/10 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
