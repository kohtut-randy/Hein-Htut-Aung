import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  const shapes = ["circle", "square", "triangle"];
  const colors = [
    "from-purple-500/20 to-blue-400/20",
    "from-pink-500/20 to-purple-400/20",
    "from-blue-500/20 to-cyan-400/20",
    "from-yellow-500/20 to-orange-400/20",
    "from-green-500/20 to-emerald-400/20",
  ];

  const getRandomShape = (shape) => {
    if (shape === "square") return "rotate-45";
    if (shape === "triangle") return "";
    return "";
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 15 + 5;

        return (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-r ${color} ${getRandomShape(
              shape
            )} ${shape === "circle" ? "rounded-full" : "rounded-md"}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -150 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.6, 0.1],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Larger floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
