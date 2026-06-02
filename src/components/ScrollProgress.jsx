import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-pink-300 via-indigo-300 to-cyan-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
