import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full hidden md:flex items-center justify-between px-8 py-4 bg-black">
      <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
        Hein Htut Aung
      </Link>
      <ul className="flex space-x-10 text-gray-300 text-lg font-medium">
        <li>
          <Link to="/about" className="hover:text-white cursor-pointer">About</Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-white cursor-pointer">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-white cursor-pointer">Projects</Link>
        </li>
        {/* <li>
          <Link to="/contact" className="hover:text-white cursor-pointer">Contact</Link>
        </li> */}
      </ul>
      <Link to="/contact">
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-md hover:scale-105 transition-transform">
          Hire Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
