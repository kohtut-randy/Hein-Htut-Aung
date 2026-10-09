import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Zap } from "lucide-react";

const stats = [
  { number: "3", label: "Years Experience" },
  // { number: "20+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
];

const expertise = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Redux",
      "React Query",
      "Vite",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    skills: ["Code Splitting", "SEO", "Web Vitals", "Accessibility"],
  },
];

const PANELS = 2;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About_Me = () => {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const scrollerRef = useRef(null);
  const [page, setPage] = useState(0);

  // Mobile only: which swipe panel is showing
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    setPage(Math.round((el.scrollLeft / max) * (PANELS - 1)));
  };

  const goToPage = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: (max / (PANELS - 1)) * i,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full h-screen overflow-hidden bg-surface text-foreground"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-5 flex flex-col gap-4 md:gap-6">
        <motion.h1
          className="text-2xl md:text-4xl font-bold shrink-0 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="flex-1 min-h-0 flex flex-col gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Big numbers */}
          <motion.dl
            variants={itemVariants}
            className="shrink-0 grid grid-cols-2 border-y border-border divide-x divide-border"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col md:flex-row md:items-baseline md:gap-5 py-3 md:py-5 ${
                  i === 0 ? "pr-4 md:pr-8" : "px-4 md:px-8"
                }`}
              >
                <dd
                  className="order-1 font-bold text-accent leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.25rem, min(8vw, 12vh), 6rem)" }}
                >
                  {s.number}
                </dd>
                <dt className="order-2 mt-1 md:mt-0 text-xs md:text-base text-muted">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>

          {/* Panels: swipeable on mobile, side-by-side columns on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex-1 min-h-0 flex flex-col gap-3"
          >
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="flex-1 min-h-0 flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-[3fr_2fr] md:gap-14 md:overflow-visible md:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Summary */}
              <article
                aria-label="Summary"
                className="w-full shrink-0 snap-center md:w-auto md:shrink min-h-0 overflow-y-auto md:overflow-visible md:self-center flex flex-col gap-3 md:gap-5"
              >
                <h2 className="text-xl md:text-3xl font-bold">
                  Frontend Developer
                </h2>
                <p className="text-sm md:text-lg text-muted leading-relaxed">
                  With{" "}
                  <span className="text-accent font-semibold">
                    3 years of professional experience
                  </span>
                  , I specialize in crafting scalable, performant web
                  applications that prioritize user experience and code quality.
                </p>
                <p className="text-sm md:text-lg text-muted leading-relaxed">
                  My expertise spans across{" "}
                  <span className="text-accent font-semibold">
                    React.js, Next.js, TypeScript
                  </span>
                  , and modern frontend technologies. I've successfully
                  delivered enterprise-level HRIS systems, task management
                  platforms, and full-stack solutions that streamline business
                  operations.
                </p>
                <p className="text-sm md:text-lg text-muted leading-relaxed">
                  I'm passionate about writing clean, maintainable code and
                  creating intuitive interfaces that solve real-world problems.
                  My approach combines technical excellence with strong
                  collaboration skills to deliver exceptional results.
                </p>
              </article>

              {/* Expertise */}
              <article
                aria-label="Expertise"
                className="w-full shrink-0 snap-center md:w-auto md:shrink min-h-0 overflow-y-auto md:overflow-visible md:self-center flex flex-col gap-5 md:gap-7"
              >
                {expertise.map(({ icon: Icon, title, skills }) => (
                  <div key={title} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-white shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-base md:text-xl font-semibold">
                        {title}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-background border border-border text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            </div>

            {/* Mobile page dots */}
            <div className="md:hidden flex items-center justify-center shrink-0">
              {Array.from({ length: PANELS }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={i === 0 ? "Show summary" : "Show expertise"}
                  aria-current={page === i}
                  className="h-8 w-8 flex items-center justify-center focus:outline-none group"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-accent ${
                      page === i ? "w-6 bg-accent" : "w-2 bg-muted/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About_Me;
