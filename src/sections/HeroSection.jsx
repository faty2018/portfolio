import { motion } from "framer-motion";
import FloatingParticles from "../components/FloatingParticles";

const HeroSection = () => {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-[92%] max-w-6xl items-center pt-28">
      <FloatingParticles />
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 via-indigo-200 to-cyan-200 text-5xl font-bold text-slate-700 shadow-glass dark:text-slate-100"
          >
            FT
          </motion.div>
          <h1 className="font-display text-4xl font-bold text-slate-800 md:text-6xl dark:text-slate-50">Fouad Traore</h1>
          <p className="mt-3 text-xl font-semibold text-indigo-500 dark:text-indigo-300">
            AI & Data Science Engineering Student | Full Stack Web Developer
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg dark:text-slate-200">
            I build intelligent and scalable web products by combining AI/data science workflows with
            modern full stack development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-indigo-600">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-indigo-300/60 bg-white/40 px-7 py-3 text-sm font-semibold text-indigo-600 transition hover:scale-105 dark:bg-white/5 dark:text-indigo-200">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
