import React from "react";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-indigo-400"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-indigo-400"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Design Systems",
    desc: "Creating cohesive design systems that ensure consistency across all user touchpoints.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-indigo-400"
      >
        <path d="M3 12h18M12 3v18" />
      </svg>
    ),
    title: "Performance",
    desc: "Optimizing applications for speed, accessibility, and excellent user experience.",
  },
];

const About_Me = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#111827] py-16 px-4 gap-8"
    >
      <div>
        <h1
          style={{ color: "white", marginBottom: "30px" }}
          className="text-5xl"
        >
          About Me
        </h1>
      </div>
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left: Intro */}
        <div className="flex-1 text-white">
          <h2
            style={{ color: "white" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Passionate about creating exceptional digital experiences
          </h2>
          <p
            style={{ color: "white" }}
            className="text-gray-300 mb-6 leading-relaxed"
          >
            Frontend Developer with 3 years of professional experience in
            designing and building scalable, user-friendly web applications.
            Skilled in React.js, Next.js, TypeScript, and modern UI frameworks
            with proven expertise in creating intuitive interfaces and seamless
            user interactions. Strong background in HRIS systems, task
            management applications, and full-stack development. Adept at
            collaborating with cross-functional teams to deliver high-quality
            solutions that improve business operations and enhance user
            satisfaction.
          </p>
        </div>
        {/* Right: Features */}
        <div className="flex-1 flex flex-col gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-[#181f2a] rounded-xl p-5 border border-[#232b3a] shadow-md"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#232b3a] rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3
                  style={{ color: "white" }}
                  className="text-lg font-semibold text-white mb-1"
                >
                  {feature.title}
                </h3>
                <p style={{ color: "white" }} className="text-gray-400 text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About_Me;
