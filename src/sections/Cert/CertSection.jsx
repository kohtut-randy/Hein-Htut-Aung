import React from "react";
import CertCard from "./CertCard";
import { Award } from "lucide-react";
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
  return (
    <section
      id="certifications"
      className="h-auto flex flex-col items-center justify-center gap-10 py-20 px-4"
    >
      <div className="text-center max-w-4xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Certifications & Credentials
        </h1>
        <p className="text-gray-400 text-lg">
          Continuous learning and professional growth through
          industry-recognized certifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-4">
        {certifications.map((cert, index) => (
          <CertCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}

export default CertSection;
