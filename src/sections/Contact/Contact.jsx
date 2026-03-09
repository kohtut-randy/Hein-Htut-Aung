import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";

function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleContactClick = (contact, idx) => {
    if (contact.link) {
      window.open(contact.link, "_blank");
    } else if (contact.copyable) {
      navigator.clipboard.writeText(contact.value);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      // make the section exactly one viewport tall and account for the
      // sticky navbar by adding a scroll margin. using `h-screen` ensures
      // the element occupies 100vh; `min-h-screen` can be kept as a
      // fallback if the content grows taller on very small viewports.
      className="relative flex h-screen min-h-screen flex-col items-center justify-center px-6 py-2 bg-gradient-to-br from-[#0F1419] via-[#1A1F2E] to-[#0F1419] text-white overflow-hidden scroll-mt-16"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header section */}
        <div className="text-center mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium tracking-wider uppercase">
              Let's Connect
            </span>
          </motion.div> */}

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get In Touch
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contacts.map((contact, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1E2530] to-[#161B26] p-6 rounded-2xl border border-white/5 cursor-pointer overflow-hidden"
              onClick={() => handleContactClick(contact, idx)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

              {/* Icon container */}
              <div className="relative flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <span className="text-3xl">{contact.icon}</span>
                </div>

                {copiedIdx === idx && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-medium"
                  >
                    ✓ Copied!
                  </motion.span>
                )}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {contact.label}
                </h3>
                <p className="text-white font-medium text-base mb-2 break-all">
                  {contact.value}
                </p>

                {/* Action hint */}
                <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                  <span>{contact.action}</span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-blue-500/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for freelance opportunities</span>
          </div>
        </motion.div> */}
      </div>
      {/* <Footer /> */}
    </section>
  );
}

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "heinhtut1820@gmail.com",
    action: "Click to copy",
    copyable: true,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+959 954470598",
    action: "Click to copy",
    copyable: true,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangkok, Thailand",
    action: "Based in",
    copyable: false,
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "hein-htut-aung-b0438324b",
    action: "Click to visit",
    link: "https://www.linkedin.com/in/hein-htut-aung-b0438324b",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "@kohtut-randy",
    action: "Click to visit",
    link: "https://github.com/kohtut-randy",
  },
  {
    icon: "🌐",
    label: "Portfolio",
    value: "View my work",
    action: "Scroll to explore",
    copyable: false,
  },
];

export default Contact;
