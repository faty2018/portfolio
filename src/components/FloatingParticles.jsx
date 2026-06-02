import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => i);

const FloatingParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((item) => (
        <motion.span
          key={item}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/70 dark:bg-white/30"
          style={{ left: `${(item * 7 + 9) % 100}%`, top: `${(item * 13 + 14) % 100}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 4 + (item % 5), repeat: Infinity, delay: item * 0.15 }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
