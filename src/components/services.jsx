import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FetchError, FetchLoading } from "./fetch-state";

const ICONS = [
  // </> desarrollo web
  <path key="web" d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  // { } software
  <path key="sw" d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />,
  // ventana / landing
  <g key="lp"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h8M10 17h4" /></g>,
];

const toFileName = (title = "") =>
  `${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}.jsx`;

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/api/services`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setServices)
      .catch(() => setError(true));
  }, []);

  if (error) return <FetchError endpoint="/api/services" message="Los servicios no están disponibles en este momento." />;
  if (!services.length) return <FetchLoading endpoint="/api/services" />;

  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.id ?? service.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="card card-glow group flex flex-col p-6 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--accent)] transition group-hover:border-[var(--accent)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[index % ICONS.length]}
              </svg>
            </span>
            <span className="mono text-xs text-[var(--dim)]">0{index + 1}</span>
          </div>

          <p className="mono mt-7 text-xs text-[var(--syn-type)]">{toFileName(service.title)}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-.02em]">{service.title}</h3>
          <p className="mt-3 text-[.95rem] leading-7 text-[var(--muted)]">{service.description}</p>

          <a href="/#contacto" className="mono mt-auto inline-flex items-center gap-2 pt-7 text-xs text-[var(--muted)] transition group-hover:text-[var(--accent)]">
            solicitar() <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
          </a>
        </motion.article>
      ))}
    </div>
  );
};

export default Services;
