import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import React from "react";

const Data = [
  {
    initial: "N",
    header: "NBA Team Manager",
    description:
      "NBA Team Manager is a Next.js + Redux web app for creating custom NBA teams, managing rosters, and assigning real players via the balldontlie API.",
    tech: ["Next.js", "Redux",  "CSS3", "JavaScript"],
    liveDemo: "#",
    code: "#",
  },
  {
    initial: "S",
    header: "Smarter HR",
    description:
      "A modern HRIS frontend application built with React, TypeScript, Redux, MUI, and Ant Design. It provides scalable and maintainable solutions for enterprise HR management.",
    tech: ["React", "TypeScript", "Redux", "MUI", "Ant Design"],
    liveDemo: "#",
    code: "#",
  },
  {
    initial: "S",
    header: "Smart HR",
    description:
      "The Admin Claim module enables administrators to efficiently review and process employee claims. It is built using React, TypeScript, Vite, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveDemo: "#",
    code: "#",
  },
];
function Projects() {
  return (
    <section id="projects" className=" min-h-screen flex flex-col items-center justify-center gap-10">
      <h1 style={{color: "white"}} className="text-5xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#23235b] to-[#3a1857] rounded-xl shadow-lg px-6 flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex flex-col items-start">
              <div style={{color: "white"}} className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#2d2d5a] text-5xl font-bold text-[#6c63ff] mb-4">
                {item.initial}
              </div>
              <h2 style={{color: "white"}} className="text-xl font-semibold text-white mb-2">{item.header}</h2>
              <p style={{color: "white"}} className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map((tech, i) => (
                  <span
                  style={{color: "white"}}
                    key={i}
                    className="bg-[#23235b] text-xs text-white px-3 py-1 rounded-full border border-[#6c63ff]"
                  >
                    {tech}
                  </span>
                ))}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
