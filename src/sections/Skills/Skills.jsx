import styles from "./SkillsStyles.module.css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      color: "#6dd5ed",
      gradient: "linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 70 },
        { name: "JavaScript (ES6+)", level: 90 },
        // { name: "HTML5", level: 95 },
        // { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Tools & Libraries",
      color: "#b993f8",
      gradient: "linear-gradient(90deg, #b993f8 0%, #8e54e9 100%)",
      skills: [
        { name: "Vite", level: 70 },
        { name: "Git", level: 75 },
        { name: "Figma", level: 75 },
        { name: "Framer Motion", level: 65 },
        { name: "React Query", level: 70 },
      ],
    },
    {
      title: "Backend & Cloud",
      color: "#f7971e",
      gradient: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Express", level: 50 },
        { name: "PostgreSQL", level: 40 },
        { name: "Vercel", level: 70 },
      ],
    },
  ];

  const frontendSkills = skillCategories[0].skills;
  const toolsSkills = skillCategories[1].skills;
  const backendSkills = skillCategories[2].skills;

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

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillCategories.length - 1 : prevIndex - 1,
    );
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

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl px-2 md:px-4 flex items-center justify-center mt-10">
        {/* navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full p-2"
          aria-label="Previous skill category"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full p-2"
          aria-label="Next skill category"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        {/* Scroll Hint */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 text-gray-400 text-sm opacity-70"
          initial={{ opacity: 0, y: -10 }}
          animate={titleInView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg> */}
            <span className="mb-4 text-xs md:text-sm">
              Use the arrows to navigate
            </span>
          </div>
        </motion.div>

        {/* Carousel Content */}
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
              <div className="bg-gradient-to-br from-[#23235b] to-[#3a1857] rounded-xl shadow-lg px-6 py-8 relative overflow-hidden mx-auto max-w-4xl">
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

                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8"
                  style={{ color: skillCategories[currentIndex].color }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skillCategories[currentIndex].title}
                </motion.h2>

                <div className={styles.skillsList}>
                  {skillCategories[currentIndex].skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skillCategories[currentIndex].gradient}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="flex gap-3 mt-6">
        {skillCategories.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-3"
                : "bg-gray-500 w-3 h-3"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <hr />
    </section>
  );
}

export default Skills;
