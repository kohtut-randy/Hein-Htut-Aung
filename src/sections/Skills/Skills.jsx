import styles from "./SkillsStyles.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 70 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const toolsSkills = [
    { name: "Vite", level: 70 },
    { name: "Git", level: 75 },
    { name: "Figma", level: 75 },
    { name: "Framer Motion", level: 65 },
    { name: "React Query", level: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 50 },
    { name: "Express", level: 50 },
    { name: "PostgreSQL", level: 40 },
    { name: "Vercel", level: 70 },
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
      { threshold: 0.2 }
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

  const SkillBar = ({ name, level, color, index }) => (
    <div
      className={`${styles.skillItem} ${
        isVisible ? styles.skillItemVisible : ""
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillBarBg}>
        <div
          className={`${styles.skillBarFill} ${
            isVisible ? styles.skillBarFillAnimate : ""
          }`}
          style={{
            width: isVisible ? `${level}%` : "0%",
            background: color,
            transitionDelay: `${index * 0.15}s`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#111827] min-h-screen flex flex-col items-center justify-center gap-5 py-20 relative overflow-hidden"
    >
      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-10 text-6xl text-purple-500/10 font-mono"
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
        className="absolute top-40 right-20 text-5xl text-blue-500/10 font-mono"
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
        className="absolute bottom-40 left-1/4 text-7xl text-cyan-500/10 font-mono"
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
        className="absolute bottom-20 right-1/4 text-6xl text-pink-500/10 font-mono"
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
      <motion.div
        className={styles.skillsGrid}
        initial={{ opacity: 0 }}
        animate={titleInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className={styles.skillsColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.columnTitle} style={{ color: "#6dd5ed" }}>
            Frontend
          </h2>
          <div className={styles.skillsList}>
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color="linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)"
                index={index}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className={styles.skillsColumn}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className={styles.columnTitle} style={{ color: "#b993f8" }}>
            Tools & Libraries
          </h2>
          <div className={styles.skillsList}>
            {toolsSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color="linear-gradient(90deg, #b993f8 0%, #8e54e9 100%)"
                index={index}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className={styles.skillsColumn}
          initial={{ opacity: 0, x: 50 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className={styles.columnTitle} style={{ color: "#f7971e" }}>
            Backend & Cloud
          </h2>
          <div className={styles.skillsList}>
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color="linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <hr />
    </section>
  );
}

export default Skills;
