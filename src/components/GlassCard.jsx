import { motion } from "framer-motion";

const GlassCard = ({ className = "", children }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`rounded-4xl border border-white/40 bg-white/35 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
