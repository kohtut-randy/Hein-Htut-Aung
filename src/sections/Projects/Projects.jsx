import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextReveal from "../../common/TextReveal";
import NBA from "../../assets/NBA.png";
import Smarter from "../../assets/Smarter.png";
import Smart from "../../assets/Smart.png";
import Supabase from "../../assets/Supabase.png";
import Chatbot from "../../assets/chatbot.png";
import Meeting from "../../assets/Meeting.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Data = [
  {
    header: "Smarter HR",
    description:
      "A modern HRIS frontend application built with React, TypeScript, Redux, MUI, and Ant Design. It provides scalable and maintainable solutions for enterprise HR management.",
    tech: ["React", "TypeScript", "Redux", "MUI", "Ant Design"],
    liveDemo: "#",
    code: "#",
    image: Smarter,
  },
  {
    header: "Smart HR",
    description:
      "The Admin Claim module enables administrators to efficiently review and process employee claims. It is built using React, TypeScript, Vite, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveDemo: "#",
    code: "#",
    image: Smart,
  },
  {
    header: "NBA Team Manager",
    description:
      "NBA Team Manager is a Next.js + Redux web app for creating custom NBA teams, managing rosters, and assigning real players via the balldontlie API.",
    tech: ["Next.js", "Redux", "CSS3", "JavaScript"],
    liveDemo: "#",
    code: "#",
    image: NBA,
  },
  {
    header: "Supabase Project",
    description:
      "Supabase CRUD Todo Application is a modern, full-stack task manager featuring complete Create, Read, Update, and Delete capabilities. It pairs an intuitive user interface with a Supabase PostgreSQL backend to provide real-time data persistence and seamless task synchronization across sessions.",
    tech: ["Supabase", "React", "Vite"],
    liveDemo: "#",
    code: "#",
    image: Supabase,
  },
  {
    header: "React Chatbot with Gemini API",
    description:
      "This project is a lightweight, beginner-friendly React template that integrates Google’s Gemini API to create a real-time conversational chatbot. It features a responsive UI for dynamic message handling and state management, allowing developers to easily customize the AI's persona for specific use cases like customer support or virtual assistants.",
    tech: ["Google Gemini API", "React", "Tailwind"],
    liveDemo: "#",
    code: "#",
    image: Chatbot,
  },
  {
    header: "React Chatbot with Gemini API",
    description:
      "This project is a lightweight, beginner-friendly React template that integrates Google’s Gemini API to create a real-time conversational chatbot. It features a responsive UI for dynamic message handling and state management, allowing developers to easily customize the AI's persona for specific use cases like customer support or virtual assistants.",
    tech: ["Google Gemini API", "React", "Tailwind"],
    liveDemo: "#",
    code: "#",
    image: Chatbot,
  },
  {
    header: "Full-Stack Meeting Booking App",
    description:
      "This is a modern, web-based platform designed to streamline the management and reservation of meeting spaces for co-working environments and corporate offices.The application allows users to view real-time room availability, browse amenities, and book specific time slots through a secure, user-friendly interface.Built with high-performance tools like React and TypeScript, it features an integrated admin dashboard for managing room listings, scheduling, and user bookings efficiently.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveDemo: "#",
    code: "#",
    image: Meeting,
  },
];
function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center gap-10 relative overflow-hidden pt-20"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.h1
        style={{ color: "white" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <TextReveal className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl text-center px-4">
        Showcasing my recent work and creative solutions
      </TextReveal>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl px-2 md:px-4 flex items-center justify-center">
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full p-2"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full p-2"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Carousel Slide */}
        <div className="w-full overflow-hidden px-4 md:px-6 lg:px-8">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              className="w-full"
            >
              <div className="bg-gradient-to-br from-[#23235b] to-[#3a1857] rounded-xl shadow-lg px-3 md:px-4 lg:px-6 flex flex-col justify-between min-h-[350px] md:min-h-[400px] relative overflow-hidden mx-auto max-w-4xl">
                {/* Floating corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 py-4 md:py-6 lg:py-8">
                  {/* Project Image */}
                  <div className="w-full lg:w-1/2 h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg">
                    <img
                      src={Data[currentIndex].image}
                      alt={Data[currentIndex].header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full lg:w-1/2">
                    <h2
                      style={{ color: "white" }}
                      className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-3"
                    >
                      {Data[currentIndex].header}
                    </h2>
                    <p
                      style={{ color: "white" }}
                      className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base"
                    >
                      {Data[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {Data[currentIndex].tech.map((tech, i) => (
                        <span
                          style={{ color: "white" }}
                          key={i}
                          className="bg-[#23235b] text-xs text-white px-3 py-1 rounded-full border border-[#6c63ff] transition-opacity hover:opacity-70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="flex gap-3 mt-6">
        {Data.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8"
                : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
