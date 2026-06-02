import { motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = ({ darkMode, onToggle }) => {
  const links = ["home", "about", "skills", "certificates", "projects", "contact"];

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[92%] max-w-5xl">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-full border border-white/45 bg-white/45 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/35"
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-lg font-semibold tracking-wide text-slate-800 dark:text-slate-100">
            FT
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm font-semibold capitalize text-slate-700 transition hover:text-indigo-500 dark:text-slate-200"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={onToggle}
            className="rounded-full border border-white/40 p-2 text-slate-700 transition hover:scale-105 dark:border-white/15 dark:text-slate-100"
          >
            {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
