import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      className="sticky top-0 z-50 w-full hidden md:flex items-center justify-between px-8 py-4 bg-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={() => scrollToSection("hero")}
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hein Htut Aung
      </motion.button>
      <ul className="flex space-x-10 text-gray-300 text-lg font-medium">
        <li>
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>
        </li>
        <li>
          <motion.button
            onClick={() => scrollToSection("certifications")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            Certification
          </motion.button>
        </li>
      </ul>
      <motion.button
        onClick={() => scrollToSection("contact")}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-md"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(138, 43, 226, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
