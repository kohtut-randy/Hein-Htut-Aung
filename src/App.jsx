import "./App.css";
import Contact from "./sections/Contact/Contact";
import Navbar from "./common/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import About_Me from "./sections/About_Me/About_Me";
import CertificateSection from "./sections/Cert/CertSection";
import CustomCursor from "./common/CustomCursor";
import SectionIndicator from "./common/SectionIndicator";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page loading animation
    setTimeout(() => {
      setLoading(false);
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1500);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[200] bg-[#111827] flex items-center justify-center"
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className=" text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Hein Htut Aung
              </motion.h1>
              <motion.div
                className="mt-4 h-1 w-48 mx-auto bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 rounded-full"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <CustomCursor /> */}
      <SectionIndicator />
      <div className="w-[100%] bg-[#111827] flex flex-col gap 10">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 origin-left z-[100]"
          style={{ scaleX }}
        />
        <Navbar />
        <Hero />
        <About_Me />
        <Projects />
        <Skills />
        <CertificateSection />
        <Contact />
        {/* <Routes>
        <Route path="/about" element={<About_Me />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      </div>
    </>
  );
}

export default App;
