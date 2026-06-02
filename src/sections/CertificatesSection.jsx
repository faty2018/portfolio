import { FiExternalLink } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import { certificates } from "../data";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="mx-auto w-[92%] max-w-6xl py-20">
      <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl dark:text-slate-50">
        Certificates
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <GlassCard key={`${certificate.title}-${certificate.issuer}`}>
            <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-300">
              {certificate.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100">
              {certificate.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Issued by {certificate.issuer}
            </p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300"
            >
              View Credential <FiExternalLink />
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
