import styles from "./SkillsStyles.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiVite,
  SiFigma,
  SiFramer,
  SiReactquery,
} from "react-icons/si";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skillItems = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#111827] min-h-screen flex flex-col items-center justify-center gap-5 py-20 relative overflow-hidden"
    >
      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-10 text-6xl text-purple-500/50 font-mono"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"</>"}
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-5xl text-blue-500/50 font-mono"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {"{ }"}
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-1/4 text-7xl text-cyan-500/50 font-mono"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {"()"}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-1/4 text-6xl text-pink-500/50 font-mono"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        {"[]"}
      </motion.div>
      <motion.h1
        ref={titleRef}
        style={{ color: "white" }}
        className="text-center text-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h1>
      <motion.p
        style={{ color: "white" }}
        className="text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={titleInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Technologies I work with to bring ideas to life
      </motion.p>

      <div className="w-full max-w-6xl px-4 md:px-6 mt-10">
        <div className={styles.skillsGrid}>
          {skillItems.map((skill, index) => (
            <div
              key={skill.name}
              className={`${styles.skillCard} ${
                isVisible ? styles.skillCardVisible : ""
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className={styles.skillIcon}>
                <skill.icon size={30} style={{ color: skill.color }} />
              </span>
              <br />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
