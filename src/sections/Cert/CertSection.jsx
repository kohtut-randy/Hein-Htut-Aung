import React, { useState } from "react";
import CertCard from "./CertCard";
import { Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fecert from "../../assets/frontend_developer_react certificate.jpg";
import basic from "../../assets/javascript_basic certificate.jpg";
import mid from "../../assets/javascript_intermediate certificate.jpg";
import nodemid from "../../assets/nodejs_intermediate certificate.jpg";
import rest from "../../assets/rest_api_intermediate certificate.jpg";
import sql from "../../assets/sql_basic certificate.jpg";
const certifications = [
  {
    id: "D8B3477F254F",
    title: "Frontend Developer (React) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: fecert, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/d8b3477f254f",
  },
  {
    id: "0C83158404BE",
    title: "JavaScript (Basic) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: basic, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/0c83158404be",
  },
  {
    id: "5573661BDAAA",
    title: "JavaScript (Intermediate) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: mid, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/5573661badaa",
  },
  {
    id: "0E2F181F07D7",
    title: "Node.js (Intermediate) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: nodemid, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/0e2f181f07d7",
  },
  {
    id: "B390B81030F9",
    title: "Rest API (Intermediate) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: rest, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/b390b81030f9",
  },
  {
    id: "B7BE21DA7C8D",
    title: "SQL (Basic) Certificate",
    organization: "HackerRank",
    date: "Jan 2026",
    image: sql, // You'll need to add actual certificate images
    viewLink: "https://www.hackerrank.com/certificates/b7be21da7c8d",
  },
];

function CertSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = React.useRef(null);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + certifications.length) % certifications.length,
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Handle wheel scroll
  React.useEffect(() => {
    const handleWheel = (e) => {
      if (!carouselRef.current) return;

      const rect = carouselRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        nextSlide();
      } else if (e.deltaY < 0) {
        prevSlide();
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex]);

  // Handle touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section
      ref={ref}
      id="certifications"
      className="h-auto flex flex-col items-center justify-center gap-10 py-20 px-4 relative overflow-hidden"
    >
      {/* Floating award/medal icons */}
      <motion.div
        className="absolute top-10 right-10 text-yellow-500/10 text-6xl"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🏆
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-blue-500/10 text-5xl"
        animate={{
          rotate: [0, -10, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🎖️
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/4 text-purple-500/10 text-7xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="text-center max-w-4xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
          Certifications & Credentials
        </h1>
        <p className="text-gray-400 text-base md:text-lg px-4">
          Continuous learning and professional growth through
          industry-recognized certifications
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full max-w-6xl px-2 md:px-4 flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Scroll Hint */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 text-gray-400 text-sm opacity-70"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <span className="mb-2">Scroll or swipe to navigate</span>
          </div>
        </motion.div>

        {/* Carousel Slide */}
        <div className="w-full overflow-hidden px-4 md:px-6 lg:px-8">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              className="w-full flex justify-center"
            >
              <div className="max-w-4xl w-full">
                <CertCard {...certifications[currentIndex]} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="flex gap-2 md:gap-3 mt-6 md:mt-8 flex-wrap justify-center max-w-md px-4">
        {certifications.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-yellow-600 to-orange-600 w-8"
                : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
}

export default CertSection;
