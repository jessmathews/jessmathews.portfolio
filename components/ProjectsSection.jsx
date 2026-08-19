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
      title: "Flasheroo",
      description: "Convert your articles to flashcards for spaced repetition learning.",
      tech: ["Python", "Streamlit", "Pytorch"],
      github: "https://github.com/jessmathews/flasheroo",
      live: "",
    },
    {
      title: "ROS2 Autonomous Drone Control",
      description: "ROS2 autonomous missions with mavros. Tested in SITL and hardware.",
      tech: ["ROS2", "Python", "Ardupilot", "MAVROS"],
      github: "https://github.com/jessmathews/ros2_autonomous_drone",
      live: "",
    },
    {
      title: "Sign2Speak",
      description: "Sign language to text and audio with Generative AI.",
      tech: ["Python", "OpenCV", "Tensorflow", "Tkinter", "Generative AI"],
      github: "https://github.com/jessmathews/Sign2Speak",
      live: "#",
    },
    {
      title: "Certificate Generator",
      description: "Automatically generate certificates for participants of events and courses.",
      tech: ["Python","Pillow", "Tkinter"],
      github: "https://github.com/jessmathews/cert_generator",
      live: "#",
    },
    {
      title: "VoteChain",
      description: "A decentralized voting system built on blockchain technology.",
      tech: ["Python", "Solidity", "Web3.py", "React"],
      github: "hhttps://github.com/jessmathews/VoteChain",
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

          {/* Smooth blurred edge overlays */}
          <div className="absolute top-0 left-0 bottom-16 w-8 sm:w-24 z-10 backdrop-blur-md sm:backdrop-blur-lg [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-16 w-8 sm:w-24 z-10 backdrop-blur-md sm:backdrop-blur-lg [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none" />

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
