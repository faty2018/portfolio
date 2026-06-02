import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const ContactSection = () => {
  return (
    <section id="contact" className="mx-auto w-[92%] max-w-4xl py-20">
      <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl dark:text-slate-50">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <GlassCard>
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-300 focus:shadow-[0_0_0_3px_rgba(165,180,252,0.35)] dark:border-white/15 dark:bg-white/5 dark:text-slate-100" />
            <input type="email" placeholder="Your Email" className="rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-300 focus:shadow-[0_0_0_3px_rgba(165,180,252,0.35)] dark:border-white/15 dark:bg-white/5 dark:text-slate-100" />
            <textarea rows="5" placeholder="Your Message" className="rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-300 focus:shadow-[0_0_0_3px_rgba(165,180,252,0.35)] dark:border-white/15 dark:bg-white/5 dark:text-slate-100" />
            <button type="button" className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg">
              Send Message
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default ContactSection;
