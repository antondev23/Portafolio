import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FetchError, FetchLoading } from "./fetch-state";

const getHost = (link) => {
  try {
    return new URL(link).host;
  } catch {
    return link;
  }
};

/* Tarjeta de proyecto: captura dentro de un "navegador" + ficha técnica. */
const ProjectCard = ({ project, index }) => {
  const image = project.image?.startsWith("http") ? project.image : `${process.env.GATSBY_API_URL}/img/${project.image}`;
  const host = getHost(project.link);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12"
    >
      <a href={project.link} target="_blank" rel="noreferrer" className="window card-glow group block" aria-label={`Abrir ${project.title}`}>
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
          <span className="mono flex min-w-0 flex-1 items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 text-[.72rem] text-[var(--muted)]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            <span className="truncate">{host}</span>
          </span>
        </div>
        <div className="overflow-hidden bg-[var(--bg)]">
          {project.image && (
            <img
              src={image}
              alt={`Captura de ${project.title}`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>
      </a>

      <div>
        <p className="mono text-xs text-[var(--accent)]">
          <span className="text-[var(--dim)]">{"// "}</span>
          proyecto_0{index + 1} · {project.date}
        </p>
        <h3 className="mt-4 text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold tracking-[-.035em]">{project.title}</h3>
        <p className="mt-4 text-[.98rem] leading-7 text-[var(--muted)]">{project.description}</p>

        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {project.tags.map((tag) => <li key={tag} className="chip">{tag}</li>)}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.link} target="_blank" rel="noreferrer" className="button-primary">
            Ver proyecto <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Proyectos2 = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/api/projects`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setProjects)
      .catch(() => setError(true));
  }, []);

  if (error) return <FetchError endpoint="/api/projects" message="Los proyectos no están disponibles en este momento." />;
  if (!projects.length) return <FetchLoading endpoint="/api/projects" />;

  return (
    <div className="mt-14 grid gap-20">
      {projects.map((project, index) => (
        <ProjectCard key={project.id ?? project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default Proyectos2;
