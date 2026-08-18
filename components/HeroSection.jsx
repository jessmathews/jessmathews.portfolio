import Link from "next/link";
import GalaxyBackground from "@/components/GalaxyBackground";
import TextType from "@/components/ui/TextType";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <GalaxyBackground />

      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 min-h-32 sm:min-h-30 md:min-h-40">
          <TextType
            text={"Hi, I'm\n Jess Mathews"}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            loop={false}
            cursorCharacter="_"
            className="text-accent"
          />
        </h1>
        <TextType
          text={"Full Stack Developer and Tinkerer"}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          loop={false}
          cursorCharacter="|"
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
        />
        <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto px-2">
          I craft responsive, dynamic, and beautiful web experiences. Passionate about bridging the gap between design and engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-70 sm:max-w-none mx-auto">
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover transition-all text-center"
          >
            View My Work
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent/10 transition-all text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
