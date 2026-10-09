import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextReveal from "../../common/TextReveal";
import NBA from "../../assets/NBA.png";
import Smarter from "../../assets/Smarter.png";
import Smart from "../../assets/Smart.png";
import Supabase from "../../assets/Supabase.png";
import Chatbot from "../../assets/chatbot.png";
import Meeting from "../../assets/Meeting.png";
import MachineLearning from "../../assets/Machine_Learning.jpg";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

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
      "A full-stack task manager with complete Create, Read, Update, and Delete capabilities. It pairs an intuitive interface with a Supabase PostgreSQL backend for real-time data persistence and task synchronization across sessions.",
    tech: ["Supabase", "React", "Vite"],
    liveDemo: "#",
    code: "#",
    image: Supabase,
  },
  {
    header: "React Chatbot with Gemini API",
    description:
      "A lightweight, beginner-friendly React template that integrates Google's Gemini API for a real-time conversational chatbot. Its responsive UI handles dynamic messages and state, and the AI persona is easy to customize for use cases like customer support or virtual assistants.",
    tech: ["Google Gemini API", "React", "Tailwind"],
    liveDemo: "#",
    code: "#",
    image: Chatbot,
  },
  {
    header: "Full-Stack Meeting Booking App",
    description:
      "A web platform for managing and reserving meeting spaces in co-working environments and corporate offices. Users see real-time room availability, browse amenities, and book time slots, while an admin dashboard handles room listings, scheduling, and bookings.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveDemo: "#",
    code: "#",
    image: Meeting,
  },
  {
    header: "Healthcare Disease Prediction Platform",
    description:
      "A full-stack ML and DL platform that predicts Parkinson's, breast cancer, and diabetes risk in real time, using FastAPI-served models and a React frontend.",
    tech: [
      "React",
      "Python",
      "Machine Learning",
      "Deep Learning",
      "sklearn",
      "TensorFlow",
      "Keras",
    ],
    liveDemo: "#",
    code: "#",
    image: MachineLearning,
  },
];

const hasLink = (href) => href && href !== "#";
const MOBILE_TAGS = 4;
const pad = (num) => String(num).padStart(2, "0");

function Projects() {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);
  const n = Data.length;
  const project = Data[active];

  const go = (delta) => setActive((i) => (i + delta + n) % n);

  // Keep the selected pill centered inside the scrolling tab row
  useEffect(() => {
    const row = tabsRef.current;
    const tab = tabRefs.current[active];
    if (!row || !tab) return;
    row.scrollTo({
      left: tab.offsetLeft - (row.clientWidth - tab.clientWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [active, reduceMotion]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
      tabRefs.current[(active + 1) % n]?.focus({ preventScroll: true });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
      tabRefs.current[(active - 1 + n) % n]?.focus({ preventScroll: true });
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative w-full h-screen overflow-hidden text-foreground"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 pt-20 pb-4 flex flex-col gap-3 md:gap-10">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-4 shrink-0">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h1>
          <TextReveal className="hidden sm:block text-muted text-sm md:text-base text-right">
            Showcasing my recent work and creative solutions
          </TextReveal>
        </div>

        {/* Project tabs: one scrolling row of pills */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Projects"
          onKeyDown={handleKeyDown}
          className="relative shrink-0 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {Data.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.header}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "bg-accent border-accent text-white"
                    : "border-border text-muted hover:text-foreground hover:border-accent"
                }`}
              >
                {p.header}
              </button>
            );
          })}
        </div>

        {/* Body: browser mockup + details */}
        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-4 md:gap-10">
          {/* Browser window */}
          <div className="flex-none h-[40%] min-h-[100px] md:h-[380px] md:w-[58%] min-h-0 flex flex-col rounded-xl overflow-hidden border border-border bg-surface shadow-xl">
            <div className="shrink-0 h-9 md:h-10 flex items-center gap-3 px-3 border-b border-border bg-background/60">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 min-w-0 text-center text-xs text-muted truncate px-3 py-1 rounded-md bg-background border border-border">
                {project.header}
              </div>
            </div>

            <div className="relative flex-1 min-h-0 bg-background">
              <AnimatePresence initial={false}>
                <motion.img
                  key={active}
                  src={project.image}
                  alt={`${project.header} screenshot`}
                  className="absolute inset-0 w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Details */}
          <div className="shrink-0 md:shrink md:flex-1 min-w-0 max-h-[46%] md:max-h-none overflow-y-auto md:flex md:flex-col md:justify-center md:-translate-y-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                role="tabpanel"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2 md:gap-4"
              >
                {/* Counter + prev/next */}
                <div className="flex items-center justify-between">
                  <p className="text-xs md:text-sm text-muted tabular-nums">
                    {pad(active + 1)} / {pad(n)}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      aria-label="Previous project"
                      className="p-1.5 rounded-full border border-border text-muted hover:text-white hover:bg-accent hover:border-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      aria-label="Next project"
                      className="p-1.5 rounded-full border border-border text-muted hover:text-white hover:bg-accent hover:border-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <h2 className="text-xl md:text-3xl font-semibold leading-tight text-accent">
                  {project.header}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-muted line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map((t, i) => (
                    <li
                      key={t}
                      className={`${
                        i >= MOBILE_TAGS ? "hidden md:block" : ""
                      } text-xs px-3 py-1 rounded-full bg-surface border border-border text-foreground`}
                    >
                      {t}
                    </li>
                  ))}
                  {project.tech.length > MOBILE_TAGS && (
                    <li className="md:hidden text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted">
                      +{project.tech.length - MOBILE_TAGS}
                    </li>
                  )}
                </ul>

                {(hasLink(project.liveDemo) || hasLink(project.code)) && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {hasLink(project.liveDemo) && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-indigo-700 text-white text-sm transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    )}
                    {hasLink(project.code) && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent text-foreground text-sm transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        View code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
