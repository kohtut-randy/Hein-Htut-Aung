import React, { useEffect, useState } from "react";

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
    <nav className="sticky top-0 z-50 w-full hidden md:flex items-center justify-between px-8 py-4 bg-black">
      <button
        onClick={() => scrollToSection("hero")}
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
      >
        Hein Htut Aung
      </button>
      <ul className="flex space-x-10 text-gray-300 text-lg font-medium">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
        </li>
        {/* <li>
           <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
        </li> */}
      </ul>
      <button
        onClick={() => scrollToSection("contact")}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-md hover:scale-105 transition-transform"
      >
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
