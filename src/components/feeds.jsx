import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import Post, { FeedError, PostSkeleton } from "./post";
import Icon from "./icons";
import imagenes from "../modules/image-float";
import { useApi } from "../modules/use-api";
import { getHost, parseExperience, projectImage, waLink } from "../modules/profile";

const hashtag = (text) => `#${text.replace(/[^\p{L}\p{N}]/gu, "")}`;

/* ---------- Publicación fijada: sobre mí ---------- */
export const AboutPost = () => (
  <Post context="Fijado" shareTitle="Antonio Ortega — Desarrollador de web">
    <p>
      👋 Hola, soy Antonio. Convierto ideas en <strong>experiencias digitales claras, rápidas y memorables</strong>.
    </p>
    <p>
      Trabajo en frontend y backend con React, Gatsby, Node.js y Tailwind CSS: componentes reutilizables, APIs propias y
      webs pensadas para dar resultados.
    </p>
    <p>
      Antes fui técnico de sistemas, así que sé resolver incidencias y escuchar lo que necesita cada usuario. Hoy comparto
      en redes el proceso de lo que construyo 🚀
    </p>
    <p className="text-[var(--accent)]">#desarrolloweb #frontend #backend</p>
    <div className="post-media">
      <StaticImage
        src="../images/perfil2.webp"
        alt="Antonio Ortega sonriendo en el campo al atardecer"
        width={600}
        aspectRatio={1}
        quality={85}
        placeholder="blurred"
        formats={["auto", "webp"]}
        transformOptions={{ cropFocus: "north" }}
        className="block w-full"
      />
    </div>
  </Post>
);

/* ---------- Proyectos ---------- */
const ProjectPost = ({ project }) => {
  const host = getHost(project.link);
  const tags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <Post time={project.date} shareTitle={project.title} shareUrl={project.link}>
      <p>
        🚀 Nuevo proyecto: <strong>{project.title}</strong>
      </p>
      <p>{project.description}</p>
      {tags.length > 0 && <p className="text-[var(--accent)]">{tags.map(hashtag).join(" ")}</p>}
      <a href={project.link} target="_blank" rel="noreferrer" className="link-card group" aria-label={`Abrir ${project.title} (${host})`}>
        {project.image && (
          <span className="relative block overflow-hidden">
            <img
              src={projectImage(project.image)}
              alt={`Captura de ${project.title}`}
              loading="lazy"
              className="block aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-3 left-3 rounded bg-black/75 px-1.5 py-0.5 text-[13px] text-white">{host}</span>
          </span>
        )}
        <span className="block border-t border-[var(--line)] px-3 py-2.5">
          <span className="block text-[13px] text-[var(--muted)]">{host}</span>
          <span className="block text-[15px]">{project.title} — ver proyecto en vivo ↗</span>
        </span>
      </a>
    </Post>
  );
};

export const ProjectPosts = () => {
  const { data, error, loading, retry } = useApi("/api/projects");
  if (loading) return <PostSkeleton count={1} />;
  if (error) return <FeedError what="los proyectos" onRetry={retry} />;
  if (!data.length) return <EmptyState text="Todavía no hay proyectos publicados." />;
  return data.map((project) => <ProjectPost key={project.id ?? project.title} project={project} />);
};

/* ---------- Stack ---------- */
export const StackPost = () => (
  <Post time="Stack" shareTitle="El stack de Antonio Ortega">
    <p>Las herramientas con las que despego cada proyecto 🛰️</p>
    <ul className="post-media m-0 grid list-none grid-cols-2 p-0 sm:grid-cols-3">
      {imagenes.map((tech) => (
        <li key={tech.alt} className="flex items-center gap-2.5 px-3 py-3 text-[14px] shadow-[1px_0_0_var(--line),0_1px_0_var(--line)] transition hover:bg-[var(--bg-elev)]">
          <img src={tech.src} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" draggable="false" />
          {tech.alt}
        </li>
      ))}
    </ul>
  </Post>
);

/* ---------- Servicios ---------- */
export const ServicesPoll = () => {
  const { data, error, loading, retry } = useApi("/api/services");
  const [choice, setChoice] = useState(null);

  if (loading) return <PostSkeleton count={1} media={false} />;
  if (error) return <FeedError what="los servicios" onRetry={retry} />;

  const selected = data.find((service) => (service.id ?? service.title) === choice);

  return (
    <Post time="Encuesta" shareTitle="¿Qué necesitas construir?">
      <p>¿Qué necesitas construir? 👇</p>
      <div className="mt-3 space-y-2" role="group" aria-label="Opciones de la encuesta">
        {data.map((service) => {
          const key = service.id ?? service.title;
          const isChoice = key === choice;
          return choice === null ? (
            <button key={key} type="button" className="poll-option" onClick={() => setChoice(key)}>
              {service.title}
            </button>
          ) : (
            <div key={key} className="poll-result">
              <motion.span
                className={`poll-bar ${isChoice ? "is-choice" : ""}`}
                initial={{ width: 0 }}
                animate={{ width: isChoice ? "100%" : "0.5rem" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                aria-hidden="true"
              />
              <span className={`relative flex items-center gap-2 ${isChoice ? "font-bold" : ""}`}>
                {service.title}
                {isChoice && <Icon name="check" size={16} strokeWidth={2.6} />}
              </span>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
            <p className="text-[var(--muted)]">{selected.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={waLink(`Hola Antonio, me interesa: ${selected.title}.`)} target="_blank" rel="noreferrer" className="btn btn-white">
                Hablemos de {selected.title.toLowerCase()}
              </a>
              <button type="button" className="btn btn-outline" onClick={() => setChoice(null)}>
                Cambiar voto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-3 text-[15px] text-[var(--muted)]">{choice === null ? "Elige una opción" : "Gracias por votar"} · Encuesta abierta</p>
    </Post>
  );
};

const SERVICE_EMOJI = ["💻", "🧩", "🎯"];

export const ServicePosts = () => {
  const { data, error, loading, retry } = useApi("/api/services");
  if (loading) return <PostSkeleton count={2} media={false} />;
  if (error) return <FeedError what="los servicios" onRetry={retry} />;

  return data.map((service, index) => (
    <Post key={service.id ?? service.title} time="Servicio" shareTitle={service.title}>
      <p>
        {SERVICE_EMOJI[index % SERVICE_EMOJI.length]} <strong>{service.title}</strong>
      </p>
      <p>{service.description}</p>
      {service.image && (
        <div className="post-media">
          <img src={service.image} alt="" loading="lazy" className="block aspect-[16/9] w-full object-cover" />
        </div>
      )}
      <a href={waLink(`Hola Antonio, me interesa: ${service.title}.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex font-medium text-[var(--accent)] hover:underline">
        Solicitar presupuesto →
      </a>
    </Post>
  ));
};

/* ---------- Experiencia en forma de hilo ---------- */
export const ExperienceThread = () => {
  const { data, error, loading, retry } = useApi("/api/experience", "text");
  if (loading) return <PostSkeleton count={2} media={false} />;
  if (error) return <FeedError what="la experiencia" onRetry={retry} />;

  const entries = parseExperience(data);

  return (
    <>
      <Post context="Hilo" contextIcon="thread" time="Hilo" thread={entries.length > 0} shareTitle="Mi recorrido profesional">
        <p>🧵 Mi recorrido profesional, en un hilo. De técnico de sistemas a desarrollador de web 👇</p>
      </Post>
      {entries.map((entry, index) => (
        <Post key={entry.title} time={entry.date} thread={index < entries.length - 1} shareTitle={entry.title}>
          <p>
            <span className="text-[var(--muted)]">
              {index + 1}/{entries.length}
            </span>{" "}
            <strong>{entry.title}</strong>
          </p>
          <ul className="m-0 list-none space-y-1.5 p-0">
            {entry.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden="true">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Post>
      ))}
    </>
  );
};

/* ---------- Llamada a la acción ---------- */
export const ContactPost = () => (
  <Post time="Ahora" shareTitle="Hablemos — Antonio Ortega">
    <p>
      ¿Tienes una idea? <strong>Hablemos.</strong> Estoy disponible para colaborar en productos digitales, webs y proyectos
      con ganas de hacerse realidad ✨
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-white">
        <Icon name="comment" size={16} strokeWidth={2.2} /> Escríbeme por WhatsApp
      </a>
      <Link to="/contact/" className="btn btn-outline">
        Usar el formulario
      </Link>
    </div>
    <p className="mt-2 text-[13px] text-[var(--muted)]">Normalmente respondo en menos de 24 horas.</p>
  </Post>
);

export const EmptyState = ({ text }) => <p className="post text-center text-[15px] text-[var(--muted)]">{text}</p>;
