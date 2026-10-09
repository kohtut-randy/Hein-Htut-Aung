import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (sectionId) => {
    const isActive = activeSection === sectionId;
    return isActive
      ? "text-accent font-semibold"
      : "text-muted-foreground hover:text-foreground";
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full hidden md:flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-accent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hein Htut Aung
        </motion.button>
        <ul className="flex space-x-10 text-muted text-lg font-medium">
          <li>
            <MagneticButton
              onClick={() => scrollToSection("about")}
              className={`${getLinkClass("about")} transition-colors cursor-pointer`}
            >
              About
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("projects")}
              className={`${getLinkClass("projects")} transition-colors cursor-pointer`}
            >
              Projects
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("skills")}
              className={`${getLinkClass("skills")} transition-colors cursor-pointer`}
            >
              Skills
            </MagneticButton>
          </li>
          <li>
            <MagneticButton
              onClick={() => scrollToSection("certifications")}
              className={`${getLinkClass("certifications")} transition-colors cursor-pointer`}
            >
              Certifications
            </MagneticButton>
          </li>
        </ul>
        <MagneticButton
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 rounded-lg bg-accent text-white font-semibold shadow-md hover:bg-indigo-700"
        >
          Contact Me
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
          className="text-xl font-bold text-accent"
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
              className="fixed top-0 right-0 h-full w-64 bg-surface backdrop-blur-lg z-50 md:hidden shadow-2xl border-l border-border"
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
                    className="text-muted hover:text-foreground"
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
                <nav className="flex flex-col space-y-4 flex-1">
                  <motion.button
                    onClick={() => scrollToSection("about")}
                    className={`text-left text-lg px-4 py-2 rounded-lg transition-all ${activeSection === "about" ? "bg-accent/10 text-accent font-semibold border border-accent/50" : "text-muted hover:bg-background hover:text-foreground"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("projects")}
                    className={`text-left text-lg px-4 py-2 rounded-lg transition-all ${activeSection === "projects" ? "bg-accent/10 text-accent font-semibold border border-accent/50" : "text-muted hover:bg-background hover:text-foreground"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projects
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("skills")}
                    className={`text-left text-lg px-4 py-2 rounded-lg transition-all ${activeSection === "skills" ? "bg-accent/10 text-accent font-semibold border border-accent/50" : "text-muted hover:bg-background hover:text-foreground"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Skills
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection("certifications")}
                    className={`text-left text-lg px-4 py-2 rounded-lg transition-all ${activeSection === "certifications" ? "bg-accent/10 text-accent font-semibold border border-accent/50" : "text-muted hover:bg-background hover:text-foreground"}`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Certifications
                  </motion.button>
                </nav>

                {/* Hire Me Button */}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg hover:bg-indigo-700 mt-auto transition-all"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Contact Me
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
