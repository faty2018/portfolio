import React, { useState, useEffect } from 'react';
import './App.css';

const NAV_LINKS = ['À propos', 'Compétences', 'Projets', 'Certifications', 'Contact'];

const SKILLS = [
  { category: 'IA & Machine Learning', items: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Computer Vision', 'NLP', 'Transfer Learning', 'Hugging Face Transformers', 'IA explicable (EigenCAM)'] },
  { category: 'IA Générative & Agents', items: ['LLM (Groq, OpenAI API)', 'RAG', 'LangChain', 'LangGraph', 'Systèmes multi-agents', 'MCP', 'Prompt Engineering'] },
  { category: 'Data Engineering & BI', items: ['Airflow', 'Apache Spark', 'Hadoop', 'MinIO', 'ETL', 'Architecture Médaillon', 'Data Warehousing', 'Web Scraping', 'Power BI', 'Pandas', 'NumPy', 'Statistiques'] },
  { category: 'Langages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'PHP', 'C++'] },
  { category: 'Développement Web & Mobile', items: ['React', 'Next.js', 'React Native', 'HTML', 'CSS', 'Bootstrap', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Laravel', 'Symfony', 'REST', 'Postman'] },
  { category: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Supabase'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'GitHub Actions (CI/CD)', 'MLflow', 'Linux', 'Microsoft Azure'] },
  { category: 'Réseaux & IoT', items: ['TCP/IP', 'VLAN', 'Cisco Packet Tracer', 'IoT'] },
  { category: 'Outils & Méthodes', items: ['Git', 'Agile Scrum', 'UML', 'Merise'] },
];

// TODO: renseigne la date et le lien de vérification des 3 premiers certificats
// (sans lien, la carte s'affiche normalement mais n'est pas cliquable)
const CERTIFICATES = [
  { title: 'Applications of AI for Anomaly Detection', issuer: 'NVIDIA', date: '', color: '#76b900', link: '' },
  { title: 'Oracle AI Agent Studio, Foundations Associate', issuer: 'Oracle', date: '', color: '#c74634', link: '' },
  { title: 'Agile Project Management', issuer: 'Google', date: '', color: '#4285f4', link: '' },
  { title: 'What is Data Science?', issuer: 'IBM', date: 'Mar 2026', color: '#0530ad', link: 'https://www.coursera.org/account/accomplishments/verify/QSMKEK8RPV9Z' },
  { title: 'React Native', issuer: 'Meta', date: 'Déc 2025', color: '#0082fb', link: 'https://www.coursera.org/account/accomplishments/verify/NJU1A1UPYL8A' },
  { title: 'React Basics', issuer: 'Meta', date: 'Déc 2025', color: '#0082fb', link: 'https://www.coursera.org/account/accomplishments/verify/PNA3VI9T0ZKQ' },
  { title: 'Using Python to Access Web Data', issuer: 'University of Michigan', date: 'Mai 2025', color: '#00274c', link: 'https://www.coursera.org/account/accomplishments/verify/AO3N0PZIWUMS' },
  { title: 'Software Engineering: Software Design and Project Management', issuer: 'HKUST', date: 'Mai 2025', color: '#003366', link: 'https://www.coursera.org/account/accomplishments/verify/2TX1OYK2HGNK' },
  { title: 'Interactivity with JavaScript', issuer: 'University of Michigan', date: 'Jan 2025', color: '#00274c', link: 'https://www.coursera.org/account/accomplishments/verify/H36XJCGO5QLX' },
  { title: 'Introduction à la POO (en C++)', issuer: 'EPFL', date: 'Jan 2025', color: '#e2001a', link: 'https://www.coursera.org/account/accomplishments/verify/J869KDLRHB6Z' },
  { title: 'Successful Negotiation: Essential Strategies and Skills', issuer: 'University of Michigan', date: 'Jan 2025', color: '#00274c', link: 'https://www.coursera.org/account/accomplishments/verify/QC66ABTIFHNQ' },
];

const PROJECTS = [
  {
    title: 'Safqa',
    subtitle: "Plateforme SaaS d'analyse des appels d'offres par IA",
    description: "Plateforme SaaS B2B multi-tenant (web + mobile) de veille et de réponse aux appels d'offres publics marocains. Collecte automatisée avec Playwright, analyse par LLM d'environ 195 appels d'offres par jour (1400+ collectés), génération assistée de réponses et alertes e-mail. Conçue et développée en autonomie lors de mon stage chez IAAI Academy.",
    stack: ['Next.js', 'TypeScript', 'Supabase', 'React Native', 'Playwright', 'Groq'],
    emoji: '📑',
  },
  {
    title: 'PlantScan Maroc',
    subtitle: 'Détection intelligente des maladies des plantes',
    description: "Application mobile de diagnostic des maladies de plantes. Un modèle MobileNetV2 entraîné sur PlantVillage classe 15 maladies avec 93 % d'accuracy sur un test set indépendant de 3 096 images, avec explicabilité EigenCAM. Le projet inclut une application React Native, une API Flask et des conseils agricoles générés via l'API OpenAI.",
    stack: ['React Native', 'Flask', 'PyTorch', 'MobileNetV2', 'OpenAI API'],
    emoji: '🌿',
  },
  {
    title: 'Système multi-agents médical',
    subtitle: 'Consultation médicale avec LangGraph',
    description: "Prototype d'assistant de consultation médicale reposant sur 4 agents spécialisés orchestrés avec LangGraph, exposés via FastAPI et le protocole MCP, avec interface React (4 écrans), intégration LangGraph Studio et export PDF.",
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'MCP', 'React', 'Python'],
    emoji: '🩺',
  },
  {
    title: 'Pipeline Big Data',
    subtitle: 'Scraping & architecture Médaillon',
    description: "Pipeline de données de bout en bout : scraping automatisé de 3 sources d'actualités (Hespress, Médias24, BBC News), orchestré par Airflow, avec architecture Médaillon (Bronze → Silver → Gold) sur MinIO et PostgreSQL, et dashboard Chart.js.",
    stack: ['Python', 'BeautifulSoup', 'MinIO', 'PostgreSQL', 'Airflow', 'Docker', 'Chart.js'],
    emoji: '🗄️',
  },
  {
    title: 'Mouwakib-Doc',
    subtitle: 'Assistant RAG sur documents',
    description: "Assistant de questions-réponses sur documents (RAG) avec LangChain, FAISS et ChromaDB, routage dynamique entre GPT-3.5 et GPT-4 et mémoire de conversation.",
    stack: ['LangChain', 'FAISS', 'ChromaDB', 'OpenAI API', 'Python'],
    emoji: '🤖',
  },
  {
    title: 'RecoHousing',
    subtitle: 'Système de recommandation immobilière',
    description: "Application web de recommandation de logements basée sur l'historique et les favoris des utilisateurs. Modélisation des relations utilisateur-logement avec une base de données graphe.",
    stack: ['Laravel', 'Neo4j', 'Leaflet.js'],
    emoji: '🏠',
  },
  {
    title: 'Guidya',
    subtitle: 'Plateforme de gestion de recrutement',
    description: "Développement d'une plateforme permettant la création de forums de recrutement, gestion d'événements, inscription et suivi des candidats, avec tableaux de bord analytiques.",
    stack: ['React.js', 'Django', 'PostgreSQL'],
    emoji: '💼',
  },
  {
    title: 'Gestion du temps — ENCG',
    subtitle: 'Application web full stack',
    description: "Application pour la gestion des emplois du temps visant à améliorer la détection des conflits d'horaires et de réservations de locaux.",
    stack: ['Laravel', 'React.js', 'MySQL'],
    emoji: '📅',
  },
  {
    title: 'Analyse des bibliothèques',
    subtitle: 'Analyse de données — Python',
    description: "Application desktop intégrant PCA, K-Means, Random Forest (88% accuracy), AFC et détection d'anomalies (Isolation Forest, LOF).",
    stack: ['Scikit-learn', 'Pandas', 'Matplotlib', 'Tkinter'],
    emoji: '📊',
  },
];

export default function App() {
  const [active, setActive] = useState('À propos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'certificates', 'contact'];
      const labels = ['À propos', 'Compétences', 'Projets', 'Certifications', 'Contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(labels[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${visible ? 'visible' : ''}`}>
      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo" onClick={() => scrollTo('about')}>FT.</span>
        <ul className="nav-links">
          {NAV_LINKS.map((link, i) => {
            const ids = ['about', 'skills', 'projects', 'certificates', 'contact'];
            return (
              <li key={link}>
                <button
                  className={`nav-btn ${active === link ? 'nav-btn--active' : ''}`}
                  onClick={() => scrollTo(ids[i])}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((link, i) => {
              const ids = ['about', 'skills', 'projects', 'certificates', 'contact'];
              return (
                <button key={link} className="mobile-menu-btn" onClick={() => scrollTo(ids[i])}>
                  {link}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="hero-content">
          <p className="hero-tag">Étudiante ingénieure en Intelligence Artificielle et Data Science | EMSI</p>
          <h1 className="hero-title">
            <span>Fatima Zahra</span>
            <em> Tayebi</em>
          </h1>
          <p className="hero-desc">
            Étudiante ingénieure en 5ème année spécialisée en Intelligence Artificielle et Data Science,
            passionnée par la conception de solutions intelligentes : machine learning, IA générative,
            systèmes multi-agents et pipelines de données, jusqu'à l'application web et mobile.
            À la recherche d'un stage PFE à partir de février 2027 en Machine Learning, IA,
            Data Science ou Data Engineering.
          </p>
          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              Voir mes projets
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Me contacter
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/faty2018" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <span className="dot" />
            <a href="https://www.linkedin.com/in/fatima-zahra-tayebi-784351279/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
            <span className="dot" />
            <a href="mailto:fatimazahratayebi2@gmail.com" className="social-link">Email</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-initials">FT</div>
          </div>
          <div className="floating-badge badge-1">PyTorch</div>
          <div className="floating-badge badge-2">LangGraph</div>
          <div className="floating-badge badge-3">Python</div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-tag">Compétences</span>
          <h2 className="section-title">Ce que je maîtrise</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.category} className="skill-card">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section--alt">
        <div className="section-header">
          <span className="section-tag">Projets</span>
          <h2 className="section-title">Ce que j'ai construit</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-emoji">{p.emoji}</div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section">
        <div className="section-header">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">Formations & certifications</h2>
        </div>
        <div className="certs-grid">
          {CERTIFICATES.map((c) => {
            const inner = (
              <>
                <div className="cert-dot" style={{ background: c.color }} />
                <div className="cert-body">
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-meta">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                </div>
              </>
            );
            return c.link ? (
              <a key={c.title} href={c.link} target="_blank" rel="noreferrer" className="cert-card">
                {inner}
              </a>
            ) : (
              <div key={c.title} className="cert-card">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Travaillons ensemble</h2>
          <p className="contact-desc">
            Ouverte aux opportunités de stage, freelance, ou simplement
            à discuter de projets intéressants.
          </p>
          <a href="mailto:fatimazahratayebi2@gmail.com" className="btn btn--primary contact-btn">
            Envoyer un email
          </a>
          <div className="contact-links">
            <a href="https://github.com/faty2018" target="_blank" rel="noreferrer" className="contact-link">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/fatima-zahra-tayebi-784351279/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Fatima Zahra Tayebi — Construit avec React</p>
      </footer>
    </div>
  );
}
