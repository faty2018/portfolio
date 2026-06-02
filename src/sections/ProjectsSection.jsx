import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import { projects } from "../data";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto w-[92%] max-w-6xl py-20">
      <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl dark:text-slate-50">Projects</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/55 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/45 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/35 dark:text-slate-200">
                  <FiGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
