import heroImg from "../../assets/code-bg.jpg";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../../common/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HeroStyles.module.css";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-hero">
        {/* <img
          src={heroImg}
          alt="Tech workspace background"
          className="w-full h-full object-cover opacity-40"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p
              style={{ color: "#ffee00ff" }}
              className="text-muted-foreground text-lg font-medium tracking-wide"
            >
              Hello, I'm
            </p>
            <h1
              style={{ color: "#4ffcff" }}
              className="text-5xl md:text-7xl font-bold"
            >
              Hein Htut Aung
            </h1>
          </motion.div>

          <motion.h2
            style={{ color: "#4ffcff" }}
            className="text-2xl md:text-3xl font-semibold text-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Typewriter
              words={["SOFTWARE ENGINEER"]}
              loop={0} // 0 or true for infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000} // This holds the text for 3 seconds before deleting
            />{" "}
          </motion.h2>

          <motion.p
            style={{ color: "#4ffcff" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I craft beautiful, responsive web experiences using React,
            TypeScript, and modern design principles. Passionate about creating
            intuitive interfaces that users love.
          </motion.p>
          {/* <a href="/Hein_Htut_Aung_Resume.pdf" download>
            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
              Download Resume
            </button>
          </a> */}
        </motion.div>
      </motion.div>

      {/* Mouse Scroll Icon */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white/70 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-white/50 text-sm font-light tracking-wider">
            Scroll Down
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
