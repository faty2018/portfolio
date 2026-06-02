import { motion } from "framer-motion";

const blobs = [
  "left-[8%] top-[15%] h-44 w-44",
  "right-[10%] top-[25%] h-60 w-60",
  "left-[22%] bottom-[10%] h-52 w-52",
  "right-[30%] bottom-[18%] h-36 w-36",
];

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[length:180%_180%] animate-gradient bg-gradient-to-br from-[#f4ecff] via-[#e8f2ff] to-[#ffeef5] dark:from-[#17182d] dark:via-[#1a2740] dark:to-[#2d1e32]" />
      {blobs.map((blob, idx) => (
        <motion.div
          key={blob}
          className={`absolute rounded-full bg-white/35 blur-3xl dark:bg-white/10 ${blob}`}
          animate={{ y: [0, idx % 2 === 0 ? -30 : 30, 0], x: [0, idx % 2 === 0 ? 16 : -16, 0] }}
          transition={{ duration: 13 + idx * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
