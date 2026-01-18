import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Navbar from "./common/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import About_Me from "./sections/About_Me/About_Me";
import CertificateSection from "./sections/Cert/CertSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Scroll to hero section on page load
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
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
      <Footer />
    </div>
  );
}

export default App;
{
  /* <Contact /> */
}
