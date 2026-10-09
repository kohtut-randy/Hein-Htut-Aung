import React, { useState } from "react";
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
const MAX_TAGS = 4;
const STACK_DEPTH = 3; // visible cards: top + 2 behind
const SWIPE_DISTANCE = 90;
const SWIPE_VELOCITY = 500;

// Top card flies off in the direction of travel; cards behind just fade out
const cardVariants = {
  exitTop: (dir) => ({
    x: -dir * 480,
    opacity: 0,
    rotate: -dir * 6,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
  exitBack: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

function CardContent({ project }) {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="h-[30%] md:h-auto md:w-1/2 shrink-0 bg-black/20">
        <img
          src={project.image}
          alt={`${project.header} screenshot`}
          draggable={false}
          className="w-full h-full object-contain select-none"
        />
      </div>

      <div className="flex-1 min-h-0 min-w-0 p-3 md:p-6 flex flex-col justify-center gap-2 md:gap-3 overflow-hidden">
        <h2
          style={{ color: "white" }}
          className="text-lg md:text-2xl font-semibold leading-tight"
        >
          {project.header}
        </h2>
        <p
          style={{ color: "#d1d5db" }}
          className="text-sm md:text-sm leading-relaxed line-clamp-3 md:line-clamp-5"
        >
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5 md:gap-2">
          {project.tech.slice(0, MAX_TAGS).map((t) => (
            <li
              key={t}
              style={{ color: "white" }}
              className="bg-[#23235b] text-xs px-3 py-1 rounded-full border border-[#6c63ff]"
            >
              {t}
            </li>
          ))}
          {project.tech.length > MAX_TAGS && (
            <li
              style={{ color: "white" }}
              className="bg-[#23235b] text-xs px-3 py-1 rounded-full"
            >
              +{project.tech.length - MAX_TAGS}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 text-white text-sm transition-colors"
              >
                <Github className="h-4 w-4" />
                View code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const n = Data.length;

  const go = (delta) => {
    setDir(delta);
    setActive((i) => (i + delta + n) % n);
  };

  const goTo = (index) => {
    if (index === active) return;
    setDir(index > active ? 1 : -1);
    setActive(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const onDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) {
      go(1);
    } else if (
      info.offset.x > SWIPE_DISTANCE ||
      info.velocity.x > SWIPE_VELOCITY
    ) {
      go(-1);
    }
  };

  // Offsets rendered back-to-front so the top card paints last
  const offsets = Array.from(
    { length: STACK_DEPTH },
    (_, k) => STACK_DEPTH - 1 - k,
  );

  return (
    <section
      ref={ref}
      id="projects"
      className="relative w-full h-screen overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 pt-20 pb-4 flex flex-col gap-3 md:gap-4">
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
          <TextReveal className="hidden sm:block text-gray-400 text-sm md:text-base text-right">
            Showcasing my recent work and creative solutions
          </TextReveal>
        </div>

        {/* Card stack */}
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-roledescription="carousel"
          aria-label="Projects. Use the left and right arrow keys to change project."
          className="relative flex-1 min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl"
        >
          {/* Leave room at the bottom so the cards behind peek out */}
          <div className="absolute inset-x-0 top-1/2 mx-auto h-[min(70%,30rem)] max-w-5xl -translate-y-1/2">
            <AnimatePresence initial={false} custom={dir}>
              {offsets.map((offset) => {
                const idx = (active + offset) % n;
                const isTop = offset === 0;
                return (
                  <motion.div
                    key={idx}
                    custom={dir}
                    variants={cardVariants}
                    exit={isTop ? "exitTop" : "exitBack"}
                    initial={
                      isTop && dir < 0
                        ? { x: -480, opacity: 0 }
                        : { opacity: 0, scale: 0.85, y: 40 }
                    }
                    animate={{
                      x: 0,
                      rotate: 0,
                      opacity: 1 - offset * 0.2,
                      scale: 1 - offset * 0.05,
                      y:
                        offset *
                        (typeof window !== "undefined" &&
                        window.innerWidth >= 768
                          ? 16
                          : 11),
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 280, damping: 28 }
                    }
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={isTop ? onDragEnd : undefined}
                    whileDrag={{ cursor: "grabbing" }}
                    aria-hidden={!isTop}
                    style={{
                      touchAction: "pan-y",
                      zIndex: STACK_DEPTH - offset,
                      pointerEvents: isTop ? "auto" : "none",
                    }}
                    className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#23235b] to-[#3a1857] shadow-xl ${
                      isTop ? "cursor-grab" : ""
                    }`}
                  >
                    {isTop && <CardContent project={Data[idx]} />}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 shrink-0">
          <button
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="p-2 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center">
            {Data.map((p, i) => (
              <button
                key={p.header}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.header}`}
                aria-current={i === active}
                className="h-8 w-5 sm:w-6 flex items-center justify-center focus:outline-none group"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-purple-300 ${
                    i === active
                      ? "w-6 bg-gradient-to-r from-purple-500 to-pink-500"
                      : "w-2 bg-gray-500 group-hover:bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next project"
            className="p-2 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
