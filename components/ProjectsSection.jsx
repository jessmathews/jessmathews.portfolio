"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";

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
    <section id="projects" className="w-full py-24 bg-primary px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="w-full relative sm:px-10">
          <style>{`
            @media (max-width: 639px) {
              .projects-swiper .swiper-button-next,
              .projects-swiper .swiper-button-prev {
                display: none !important;
              }
            }
          `}</style>
          <Swiper
            grabCursor={true}
            spaceBetween={16}
            slidesPerView={"auto"}
            centeredSlides={true}
            speed={800}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-full pb-16! projects-swiper"
            style={{
              "--swiper-navigation-color": "var(--color-accent)",
              "--swiper-pagination-color": "var(--color-accent)",
              "--swiper-pagination-bullet-inactive-color": "#4b5563",
            }}
            breakpoints={{
              640: {
                spaceBetween: 30,
                centeredSlides: false,
              }
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide 
                key={index} 
                className="h-auto! w-[85vw]! max-w-70 sm:max-w-none! sm:w-87.5! md:w-100"
              >
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
