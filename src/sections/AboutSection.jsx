import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { fadeInUp, staggerContainer } from "../animations";
import { timeline } from "../data";

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto w-[92%] max-w-6xl py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold text-slate-800 md:text-4xl dark:text-slate-50">
          About Me
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 max-w-3xl text-slate-700 dark:text-slate-200">
          I am an AI and Data Science engineering student with full stack web development skills.
          I focus on solving real problems through data-driven thinking, clean architecture, and strong
          product execution from backend to frontend.
        </motion.p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {timeline.map((item) => (
            <motion.div key={item.year} variants={fadeInUp}>
              <GlassCard className="relative pl-10">
                <span className="absolute left-4 top-8 h-3 w-3 rounded-full bg-indigo-300" />
                <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-300">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
