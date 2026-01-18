import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleContactClick = (contact, idx) => {
    // Copy to clipboard
    navigator.clipboard.writeText(contact.value);
    setCopiedIdx(idx);
    // Advance: open link if LinkedIn
    if (contact.label === "LinkedIn") {
      window.open(`https://${contact.value}`, "_blank");
    }
    // Optionally, add more logic for other types
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-[#181E2A] to-[#1A1832] text-white gap-10 relative overflow-hidden"
    >
      {/* Floating connection lines */}
      <motion.div
        className="absolute top-1/4 left-10 w-1 h-40 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        animate={{
          scaleX: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Floating dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      <motion.h1
        className="text-5xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Let's start a conversation
      </motion.h2>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I'm always interested in hearing about new projects and opportunities.
        Whether you're a startup looking to build your first product or an
        established company wanting to innovate, I'd love to help.
      </motion.p>
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleContactClick(contact, idx)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl">{contact.icon}</div>
            <div>
              <div className="font-semibold text-black">{contact.label}</div>
              <div className="text-gray-600 flex items-center">
                {contact.label === "LinkedIn" ? (
                  <span className="underline text-blue-600">
                    {contact.value}
                  </span>
                ) : (
                  <span>{contact.value}</span>
                )}
                {copiedIdx === idx && (
                  <span className="ml-2 text-green-500 text-xs">Copied!</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const contacts = [
  {
    icon: "📧", // Replace with your SVG or icon component
    label: "Email",
    value: "heinhtut1820@gmail.com",
  },
  {
    icon: "📞",
    label: "Whatsapp",
    value: "+959 954470598",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangkok",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "www.linkedin.com/in/hein-htut-aung-b0438324b",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "https://github.com/kohtut-randy",
  },
];

export default Contact;
