import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full hidden md:flex items-center justify-between px-8 py-4 bg-[#111827]/80 backdrop-blur-lg border-b border-purple-500/10"
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
            <MagneticButton
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("certifications")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certification
            </MagneticButton>
          </li>
        </ul>
        <MagneticButton
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-md hover:shadow-purple-500/50"
        >
          Hire Me
        </MagneticButton>
      </motion.nav>

      {/* Mobile Header with Hamburger */}
      <motion.div
        className="sticky top-0 z-50 w-full md:hidden flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
          whileTap={{ scale: 0.95 }}
        >
          Hein Htut Aung
        </motion.button>

        {/* Hamburger Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-lg z-50 md:hidden shadow-2xl border-l border-purple-500/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col space-y-6 flex-1">
                  <motion.button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-xl text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("projects")}
                    className="text-left text-xl text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projects
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("skills")}
                    className="text-left text-xl text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Skills
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("certifications")}
                    className="text-left text-xl text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Certification
                  </motion.button>
                </nav>

                {/* Hire Me Button */}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-md mt-auto"
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
