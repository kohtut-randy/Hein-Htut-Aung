import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NBA from "../../assets/NBA.png";
import Smarter from "../../assets/Smarter.png";
import Smart from "../../assets/Smart.png";

const Data = [
  {
    initial: "N",
    header: "NBA Team Manager",
    description:
      "NBA Team Manager is a Next.js + Redux web app for creating custom NBA teams, managing rosters, and assigning real players via the balldontlie API.",
    tech: ["Next.js", "Redux", "CSS3", "JavaScript"],
    liveDemo: "#",
    code: "#",
    image: NBA, // You'll need to add actual certificate images
  },
  {
    initial: "S",
    header: "Smarter HR",
    description:
      "A modern HRIS frontend application built with React, TypeScript, Redux, MUI, and Ant Design. It provides scalable and maintainable solutions for enterprise HR management.",
    tech: ["React", "TypeScript", "Redux", "MUI", "Ant Design"],
    liveDemo: "#",
    code: "#",
    image: Smarter, // You'll need to add actual certificate images
  },
  {
    initial: "S",
    header: "Smart HR",
    description:
      "The Admin Claim module enables administrators to efficiently review and process employee claims. It is built using React, TypeScript, Vite, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveDemo: "#",
    code: "#",
    image: Smart, // You'll need to add actual certificate images
  },
];
function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center gap-10 relative overflow-hidden"
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
        className="text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {Data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#23235b] to-[#3a1857] rounded-xl shadow-lg px-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 25px 50px rgba(124, 58, 237, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Floating corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-6">
              {/* Project Image */}
              <div className="w-full h-50 overflow-hidden rounded-t-lg mb-4">
                <img
                  src={item.image}
                  alt={item.header}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <div
                  style={{ color: "white" }}
                  className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#2d2d5a] text-5xl font-bold text-[#6c63ff] mb-4 mt-2"
                >
                  {item.initial}
                </div>
                <h2
                  style={{ color: "white" }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {item.header}
                </h2>
                <p style={{ color: "white" }} className="text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      style={{ color: "white" }}
                      key={i}
                      className="bg-[#23235b] text-xs text-white px-3 py-1 rounded-full border border-[#6c63ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex gap-4 mt-auto">
              <a
                href={item.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6c63ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5548c8] transition"
              >
                Live Demo
              </a>
              <a
                href={item.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-[#6c63ff] text-[#6c63ff] px-4 py-2 rounded-lg font-medium hover:bg-[#23235b] hover:text-white transition"
              >
                Code
              </a>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
