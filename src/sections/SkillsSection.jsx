import { FaDatabase, FaServer } from "react-icons/fa";
import { FiCode, FiTool } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";
import GlassCard from "../components/GlassCard";
import { skills } from "../data";

const icons = {
  Frontend: <FiCode className="text-indigo-500" size={20} />,
  Backend: <FaServer className="text-cyan-500" size={20} />,
  "AI & Data Science": <GiArtificialIntelligence className="text-emerald-500" size={20} />,
  Databases: <FaDatabase className="text-pink-500" size={20} />,
  Tools: <FiTool className="text-violet-500" size={20} />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="mx-auto w-[92%] max-w-6xl py-20">
      <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl dark:text-slate-50">
        Skills
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, list]) => (
          <GlassCard key={category}>
            <div className="mb-5 flex items-center gap-3">
              {icons[category]}
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex rounded-full border border-white/55 bg-white/55 px-3 py-1 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
