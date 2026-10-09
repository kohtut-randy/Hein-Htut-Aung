import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiVercel,
  SiVite,
  SiFramer,
  SiReactquery,
} from "react-icons/si";

// "currentColor" keeps dark brand logos (Next.js, Express, Vercel) visible on a dark theme
const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
    ],
  },
];

// Parent staggers the rows; each row staggers its chips
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const rowVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

function Skills() {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const chipVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="relative w-full h-screen overflow-hidden bg-background text-foreground"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-6 flex flex-col gap-4 md:gap-6">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4 shrink-0">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h1>
          <motion.p
            className="hidden sm:block text-muted text-sm md:text-base text-right"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </div>

        {/* Category rows, centered in the remaining height */}
        <motion.div
          className="flex-1 min-h-0 flex flex-col justify-center"
          variants={listVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={rowVariants}
              className="grid gap-3 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] items-start py-4 md:py-7 border-t border-border last:border-b"
            >
              <h2 className="text-lg md:text-2xl font-semibold text-accent">
                {cat.title}
              </h2>

              <ul className="flex flex-wrap gap-2 md:gap-3">
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <motion.li
                    key={name}
                    variants={chipVariants}
                    className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 rounded-lg bg-surface border border-border hover:border-accent transition-colors duration-200"
                  >
                    <span style={{ color }} className="text-xl md:text-2xl">
                      <Icon />
                    </span>
                    <span className="text-sm md:text-base font-medium text-foreground">
                      {name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
