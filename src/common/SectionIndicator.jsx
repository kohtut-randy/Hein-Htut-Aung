import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certs" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              activeSection === section.id
                ? "border-purple-500 bg-purple-500 scale-125"
                : "border-gray-500 bg-transparent"
            }`}
            animate={{
              scale: activeSection === section.id ? 1.25 : 1,
            }}
          />
          <motion.span
            className="absolute right-6 px-3 py-1 bg-gray-800/90 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ x: 10 }}
            whileHover={{ x: 0 }}
          >
            {section.label}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
}

export default SectionIndicator;
