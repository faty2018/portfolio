import { motion, useScroll, useTransform } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import SectionDivider from "./components/SectionDivider";
import AnimatedBackground from "./layout/AnimatedBackground";
import Navbar from "./layout/Navbar";
import { useDarkMode } from "./hooks/useDarkMode";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-800 transition-colors duration-500 dark:text-slate-100">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar darkMode={darkMode} onToggle={() => setDarkMode((prev) => !prev)} />

      <motion.main style={{ y }}>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <CertificatesSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
      </motion.main>
    </div>
  );
}

export default App;
