import React from "react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";

function CertCard({ title, organization, date, image, viewLink, id }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 group">
      {/* Certificate Preview Image */}
      <div className="relative w-full h-64 bg-gray-900 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Certificate Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Building2 className="w-4 h-4" />
            <span>{organization}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Award className="w-4 h-4" />
            <span>{id}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* View Certificate Button */}
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 group/btn"
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

export default CertCard;
