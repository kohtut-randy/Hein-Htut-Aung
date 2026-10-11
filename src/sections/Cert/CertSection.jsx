import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Maximize2,
} from "lucide-react";
import fecert from "../../assets/frontend_developer_react certificate.jpg";
import basic from "../../assets/javascript_basic certificate.jpg";
import mid from "../../assets/javascript_intermediate certificate.jpg";
import nodemid from "../../assets/nodejs_intermediate certificate.jpg";
import rest from "../../assets/rest_api_intermediate certificate.jpg";
import sql from "../../assets/sql_basic certificate.jpg";

const certifications = [
  {
    id: "D8B3477F254F",
    title: "Frontend Developer (React)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: fecert,
    viewLink: "https://www.hackerrank.com/certificates/d8b3477f254f",
  },
  {
    id: "0C83158404BE",
    title: "JavaScript (Basic)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: basic,
    viewLink: "https://www.hackerrank.com/certificates/0c83158404be",
  },
  {
    id: "5573661BDAAA",
    title: "JavaScript (Intermediate)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: mid,
    viewLink: "https://www.hackerrank.com/certificates/5573661badaa",
  },
  {
    id: "0E2F181F07D7",
    title: "Node.js (Intermediate)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: nodemid,
    viewLink: "https://www.hackerrank.com/certificates/0e2f181f07d7",
  },
  {
    id: "B390B81030F9",
    title: "REST API (Intermediate)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: rest,
    viewLink: "https://www.hackerrank.com/certificates/b390b81030f9",
  },
  {
    id: "B7BE21DA7C8D",
    title: "SQL (Basic)",
    organization: "HackerRank",
    date: "Jan 2026",
    image: sql,
    viewLink: "https://www.hackerrank.com/certificates/b7be21da7c8d",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Lightbox({ index, onClose, onChange }) {
  const cert = certifications[index];
  const closeRef = useRef(null);
  const n = certifications.length;

  const step = useCallback(
    (delta) => onChange((index + delta + n) % n),
    [index, n, onChange],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${cert.title} certificate`}
        className="relative w-full max-w-4xl max-h-[94dvh] overflow-hidden rounded-2xl bg-background text-foreground shadow-2xl flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate image with side arrows */}
        <div className="relative h-[52dvh] md:h-[62dvh] bg-black/40 p-2 md:p-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={cert.id}
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close certificate"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={() => step(-1)}
            aria-label="Previous certificate"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-accent text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next certificate"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-accent text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Details */}
        <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
          <div className="min-w-0">
            <h2 className="text-lg md:text-xl font-semibold">{cert.title}</h2>
            <p className="text-sm text-muted">
              {cert.organization} · {cert.date}
            </p>
            <p className="text-xs text-muted mt-1 break-all">
              Credential ID: {cert.id}
            </p>
          </div>
          <a
            href={cert.viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-indigo-700 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            <ExternalLink className="h-4 w-4" />
            Verify credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const closeLightbox = useCallback(() => setOpenIndex(null), []);
  const selectedCert = certifications[selectedIndex];

  return (
    <section
      ref={ref}
      id="certifications"
      className="relative w-full h-screen overflow-hidden bg-surface text-foreground"
      style={{ height: "100dvh" }}
    >
      <div className="h-full w-full max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-5 flex flex-col gap-4 md:gap-6">
        <div className="flex items-end justify-between gap-4 shrink-0">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase text-muted">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              Credentials <span className="text-accent">/ 06</span>
            </p>
            <motion.h1
              className="mt-1 text-2xl md:text-4xl font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Certifications
            </motion.h1>
          </div>
          <motion.p
            className="hidden md:block text-muted text-sm text-right max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Verified milestones in my development journey
          </motion.p>
        </div>

        <div className="flex-1 min-h-0 grid grid-rows-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:grid-rows-1 md:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] gap-3 md:gap-5">
          <motion.article
            key={selectedCert.id}
            className="min-h-0 flex flex-col overflow-hidden rounded-lg border border-border bg-background"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setOpenIndex(selectedIndex)}
              aria-label={`Open ${selectedCert.title} certificate`}
              className="group relative flex-1 min-h-0 bg-surface p-3 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} certificate`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-background/90 px-3 py-2 text-xs font-medium text-foreground">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                Expand
              </span>
            </button>

            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-border p-3 md:p-5">
              <div className="min-w-0">
                <p className="text-xs text-muted">
                  {selectedCert.organization} <span aria-hidden="true">/</span>{" "}
                  {selectedCert.date}
                </p>
                <h2 className="truncate text-sm font-semibold text-foreground md:text-lg">
                  {selectedCert.title}
                </h2>
              </div>
              <a
                href={selectedCert.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:px-4 md:text-sm"
              >
                Verify <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.article>

          <motion.ul
            aria-label="Choose a certificate"
            className="min-h-0 grid grid-cols-2 grid-rows-3 gap-2 md:flex md:flex-col md:overflow-y-auto md:pr-1"
            variants={gridVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {certifications.map((cert, i) => {
              const isSelected = i === selectedIndex;
              return (
                <motion.li
                  key={cert.id}
                  variants={tileVariants}
                  className="min-h-0 min-w-0 md:min-h-[4.5rem]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                    aria-pressed={isSelected}
                    className={`flex h-full w-full items-center gap-2 overflow-hidden border px-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:gap-3 md:px-3 ${
                      isSelected
                        ? "border-accent bg-accent/10"
                        : "border-border bg-background hover:border-accent"
                    }`}
                  >
                    <span
                      className={`shrink-0 font-mono text-xs ${isSelected ? "text-accent" : "text-muted"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-foreground md:text-sm">
                        {cert.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[10px] text-muted md:text-xs">
                        {cert.organization} · {cert.date}
                      </span>
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            index={openIndex}
            onClose={closeLightbox}
            onChange={setOpenIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default CertSection;
