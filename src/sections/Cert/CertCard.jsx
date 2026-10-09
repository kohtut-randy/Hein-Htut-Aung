import React from "react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

function CertCard({ title, organization, date, image, viewLink, id }) {
  return (
    <motion.div
      className="bg-background backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl group relative flex flex-col md:flex-row"
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
        transition: { duration: 0.3 },
      }}
      animate={{
        rotateY: [0, 2, 0, -2, 0],
      }}
      transition={{
        rotateY: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{ perspective: 1000 }}
    >
      {/* Floating sparkle effect */}
      <motion.div
        className="absolute top-2 right-2 text-yellow-400/50 text-lg z-10"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>
      {/* Certificate Preview Image */}
      <div className="relative w-full md:w-1/2 h-48 md:h-auto md:min-h-[300px] bg-surface overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Certificate Details */}
      <div className="w-full md:w-1/2 p-4 md:p-5 lg:p-6 flex flex-col justify-between min-w-0">
        <div className="space-y-3 md:space-y-4 mb-4">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <div className="flex items-center gap-2 text-muted">
              <Building2 className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span>{organization}</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm break-all">{id}</span>
            </div>

            <div className="flex items-center gap-2 text-muted">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* View Certificate Button */}
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 group/btn text-sm md:text-base hover:shadow-lg hover:shadow-indigo-500/30"
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
}

export default CertCard;
