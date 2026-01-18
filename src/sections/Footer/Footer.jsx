import styles from "./FooterStyles.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="footer"
      className="bg-[#111827] flex flex-row align-center justify-center"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        style={{ color: "white" }}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &copy; 2024 Hein Htut Aung. <br />
        All rights reserved.
      </motion.p>
    </motion.section>
  );
}

export default Footer;
