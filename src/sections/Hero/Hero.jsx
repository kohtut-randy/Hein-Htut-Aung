import { Typewriter } from "react-simple-typewriter";
import Navbar from "../../common/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HeroStyles.module.css";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      {/* Navbar */}
      {/* <Navbar /> */}

      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-20"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        {/* Professional Gradient Overlays */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y }}
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </motion.div>

        {/* Subtle Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full"
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-2 h-2 bg-cyan-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Minimalist Code Elements */}
        <motion.div
          className="absolute top-1/4 left-12 text-6xl font-mono text-blue-400/5"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"</>"}
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-16 text-5xl font-mono text-purple-400/5"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          {"{}"}
        </motion.div>

        {/* Main Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting Badge */}
            {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div> */}

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className=" text-4xl md:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                Hein Htut Aung
              </h1>
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>

            {/* Title with Typewriter */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 min-h-[48px] md:min-h-[56px]">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    // "UI/UX Engineer",
                    "React Specialist",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Building modern web applications with{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-blue-400 font-semibold">TypeScript</span>,
              and <span className="text-blue-400 font-semibold">Next.js</span>.
              Specialized in creating scalable, high-performance solutions that
              deliver exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {[
                { name: "React", icon: "⚛️" },
                { name: "TypeScript", icon: "📘" },
                { name: "Next.js", icon: "▲" },
                { name: "Tailwind", icon: "🎨" },
              ].map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-6 h-10 border-2 border-slate-400/40 group-hover:border-blue-400 rounded-full flex justify-center p-1 transition-colors duration-300">
              <motion.div
                className="w-1.5 h-1.5 bg-slate-400/60 group-hover:bg-blue-400 rounded-full transition-colors duration-300"
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-slate-400/60 group-hover:text-blue-400 text-xs font-medium tracking-wider uppercase transition-colors duration-300">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
