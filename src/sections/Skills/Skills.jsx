import styles from "./SkillsStyles.module.css";
import { useEffect, useRef, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const toolsSkills = [
    { name: "Vite", level: 80 },
    { name: "Git", level: 85 },
    { name: "Figma", level: 75 },
    { name: "Framer Motion", level: 70 },
    { name: "React Query", level: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 75 },
    { name: "Vercel", level: 85 },
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
      className="bg-[#111827] min-h-screen flex flex-col align-center justify-center gap-5"
    >
      <h1 style={{ color: "white" }} className="text-center text-5xl">
        Skills & Technologies
      </h1>
      <p style={{ color: "white" }} className="text-center text-gray-400">
        Technologies I work with to bring ideas to life
      </p>
      <div className={styles.skillsGrid}>
        <div className={styles.skillsColumn}>
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
        </div>
        <div className={styles.skillsColumn}>
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
        </div>
        <div className={styles.skillsColumn}>
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
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
