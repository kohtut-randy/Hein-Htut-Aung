import { Typewriter } from "react-simple-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const stack = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

// Reveal each line of the name by sliding it up from behind a mask
const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14">
      {stack.map(({ name, icon: Icon }) => (
        <span
          key={name}
          className="flex items-center gap-3 text-xl md:text-2xl text-muted whitespace-nowrap"
        >
          <Icon className="text-accent" />
          {name}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex flex-col overflow-hidden bg-background text-foreground pt-20"
      style={{ height: "100dvh" }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex-1 min-h-0 flex flex-col justify-center gap-[3vh] py-4">
        {/* Name */}
        <h1
          className="font-bold tracking-tighter leading-[0.9]"
          style={{ fontSize: "clamp(3rem, min(13vw, 18vh), 10.5rem)" }}
          aria-label="Hein Htut Aung"
        >
          {["Hein Htut Aung"].map((text, i) => (
            <span key={text} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block text-accent"
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                aria-hidden="true"
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Role + Intro + CTAs in a 3-col grid */}
        <motion.div
          className="grid gap-6 md:gap-10 md:grid-cols-3 pt-[3vh] border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          {/* Role */}
          <div className="flex flex-col gap-3">
            {/* <span className="text-xs uppercase tracking-widest text-muted">
              Role
            </span> */}
            <h2 className="text-2xl md:text-3xl font-semibold text-accent min-h-[2.25rem]">
              <Typewriter
                words={["Frontend Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </h2>
          </div>

          {/* Intro */}
          <div className="flex flex-col gap-3 md:col-span-1">
            {/* <span className="text-xs uppercase tracking-widest text-muted">
              About
            </span> */}
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
              I build modern web applications with{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">TypeScript</span>,
              and <span className="text-foreground font-semibold">Next.js</span>
              , with a focus on clean architecture, reusable components, and
              maintainable code.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 justify-start">
            {/* <span className="text-xs uppercase tracking-widest text-muted">
              Get started
            </span> */}
            <div className="flex flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                className="flex-1 px-6 py-3 text-center bg-accent hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="flex-1 px-6 py-3 text-center border border-border hover:border-accent text-foreground font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Get in touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Tech marquee */}
      <div
        className="w-full shrink-0 overflow-hidden border-y border-border py-4 md:py-5"
        aria-label="Core technologies: React, TypeScript, Next.js, Tailwind CSS"
      >
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          {/* Two copies of each group so -50% loops seamlessly */}
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
