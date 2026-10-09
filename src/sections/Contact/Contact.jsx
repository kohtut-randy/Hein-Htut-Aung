import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MessageCircle,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";

const email = {
  icon: Mail,
  label: "Email",
  value: "heinhtut1820@gmail.com",
  action: "Click to copy",
  copyable: true,
};

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+959 954470598",
    action: "Click to copy",
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hein-htut-aung-randy",
    action: "Visit",
    link: "https://www.linkedin.com/in/hein-htut-aung-randy/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@kohtut-randy",
    action: "Visit",
    link: "https://github.com/kohtut-randy",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "View my work",
    action: "See projects",
    link: "#projects",
    internal: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
    action: "Based in",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [copied, setCopied] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (contact) => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopied(contact.label);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard blocked: leave the value visible so it can be copied by hand
    }
  };

  const rowClass =
    "group w-full flex items-center gap-4 py-3 md:py-4 px-3 -mx-3 rounded-lg text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const interactiveRow = `${rowClass} hover:bg-surface cursor-pointer`;

  const RowBody = ({ contact }) => {
    const Icon = contact.icon;
    const isCopied = copied === contact.label;
    return (
      <>
        <Icon className="w-5 h-5 shrink-0 text-accent" aria-hidden="true" />
        <span className="flex-1 min-w-0">
          <span className="block text-xs text-muted">{contact.label}</span>
          <span className="block font-medium text-sm md:text-base break-all">
            {contact.value}
          </span>
        </span>
        <span
          className={`flex items-center gap-2 text-xs shrink-0 ${
            isCopied ? "text-green-500" : "text-muted group-hover:text-accent"
          } transition-colors`}
        >
          <span className="hidden sm:inline">
            {isCopied ? "Copied" : contact.action}
          </span>
          {contact.copyable &&
            (isCopied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            ))}
          {contact.link && <ArrowUpRight className="w-4 h-4" />}
        </span>
      </>
    );
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full h-screen overflow-hidden bg-background text-foreground"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-5 flex flex-col">
        {/* Scrolls inside itself only if a very short screen can't fit everything */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <motion.div
            className="min-h-full grid content-center md:grid-cols-2 gap-6 md:gap-16 items-center"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Left: statement + primary email */}
            <div className="flex flex-col gap-3 md:gap-6">
              <motion.h1
                variants={itemVariants}
                className="font-bold tracking-tight leading-[1.05] text-accent"
                style={{ fontSize: "clamp(2.5rem, min(9vw, 13vh), 5.5rem)" }}
              >
                Get In Touch
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm md:text-lg text-muted leading-relaxed max-w-md"
              >
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </motion.p>

              <motion.button
                variants={itemVariants}
                onClick={() => copy(email)}
                className="group text-left w-fit max-w-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Copy email address ${email.value}`}
              >
                <span className="block text-xl sm:text-2xl lg:text-4xl font-bold break-all group-hover:text-accent transition-colors">
                  {email.value}
                </span>
                <span
                  className={`mt-1 flex items-center gap-2 text-xs md:text-sm ${
                    copied === email.label ? "text-green-500" : "text-muted"
                  }`}
                >
                  {copied === email.label ? (
                    <>
                      <Check className="w-4 h-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Click to copy
                    </>
                  )}
                </span>
              </motion.button>
            </div>

            {/* Right: other ways to connect */}
            <motion.ul
              variants={itemVariants}
              className="flex flex-col border-t border-border divide-y divide-border border-b"
            >
              {contacts.map((contact) => (
                <li key={contact.label}>
                  {contact.copyable ? (
                    <button
                      onClick={() => copy(contact)}
                      className={interactiveRow}
                      aria-label={`Copy ${contact.label}: ${contact.value}`}
                    >
                      <RowBody contact={contact} />
                    </button>
                  ) : contact.link ? (
                    <a
                      href={contact.link}
                      {...(contact.internal
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      className={interactiveRow}
                    >
                      <RowBody contact={contact} />
                    </a>
                  ) : (
                    <div className={rowClass}>
                      <RowBody contact={contact} />
                    </div>
                  )}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
