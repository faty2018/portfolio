import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: "30%" }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1 }}
      className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-indigo-300/70 to-transparent dark:via-indigo-200/40"
    />
  );
};

export default SectionDivider;
