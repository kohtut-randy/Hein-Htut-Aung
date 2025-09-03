import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Navbar from "./common/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import About_Me from "./sections/About_Me/About_Me";
function App() {
  return (
    <div className="w-[100%] bg-[#111827] flex flex-col gap 10">
      <Navbar />
      <Hero/>
      <About_Me/>
      <Projects/>
      <Skills/>
      <Contact/>
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
      {/* <Contact /> */}
