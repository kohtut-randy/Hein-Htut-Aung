import heroImg from "../../assets/code-bg.jpg";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../../common/Navbar";

import "./HeroStyles.module.css";
function Hero() {
  // const { theme, toggleTheme } = useTheme();
  // const themeIcon = theme === "light" ? sun : moon;
  // const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  // const githubIcon = theme === "light" ? githubLight : githubDark;
  // const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* <Navbar/> */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={heroImg}
          alt="Tech workspace background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-slide-up">
        <div className="space-y-6">
          <div className="space-y-2">
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
          </div>

          <h2
            style={{ color: "#ff0400ff" }}
            className="text-2xl md:text-3xl font-semibold text-foreground"
          >
            <Typewriter words={["SOFTWARE ENGINEER"]} loop />
          </h2>

          <p
            style={{ color: "#15ff00ff" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I craft beautiful, responsive web experiences using React,
            TypeScript, and modern design principles. Passionate about creating
            intuitive interfaces that users love.
          </p>
          <a href="/Hein_Htut_Aung_Resume.pdf" download>
            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

