import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView && (
        <motion.span
          initial={{ value: 0 }}
          animate={{ value: end }}
          transition={{ duration, ease: "easeOut" }}
        >
          {({ value }) => `${prefix}${Math.floor(value)}${suffix}`}
        </motion.span>
      )}
    </motion.span>
  );
}

export default AnimatedCounter;
