import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import Avatar from "./avatar";
import Icon, { Verified } from "./icons";
import { SocialIcons } from "./socials";
import imagenes from "../modules/image-float";
import { useApi } from "../modules/use-api";
import { CV_URL, PROFILE, ROLES, waLink } from "../modules/profile";

/* Banner del perfil: imagen fdp.png (1584×396, proporción 4:1). */
const SpaceBanner = () => (
  <div className="space-banner">
    <StaticImage
      src="../images/fdp.png"
      alt="Banner de Antonio Ortega: desarrollador web"
      width={1200}
      quality={90}
      placeholder="blurred"
      formats={["auto", "webp"]}
      className="block h-full w-full"
    />
  </div>
);

/* Efecto máquina de escribir. En SSR y con "reducir movimiento" muestra el primer rol fijo. */
const useTypewriter = (words, { typeMs = 65, eraseMs = 35, holdMs = 2200 } = {}) => {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let wordIndex = 0;
    let length = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      if (deleting) {
        length -= 1;
        setText(word.slice(0, length));
        if (length === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, eraseMs);
        return;
      }
      length += 1;
      setText(word.slice(0, length));
      if (length === word.length) {
        deleting = true;
        timer = setTimeout(tick, holdMs);
        return;
      }
      timer = setTimeout(tick, typeMs);
    };

    timer = setTimeout(tick, holdMs);
    return () => clearTimeout(timer);
  }, [words, typeMs, eraseMs, holdMs]);

  return text;
};

const Stat = ({ value, label, to }) => (
  <Link to={to} className="hover:underline">
    <span className="font-bold text-[var(--text)]">{value ?? "–"}</span> <span className="text-[var(--muted)]">{label}</span>
  </Link>
);

const ProfileHeader = () => {
  const role = useTypewriter(ROLES);
  const projects = useApi("/api/projects");
  const services = useApi("/api/services");
  const years = new Date().getFullYear() - Number(PROFILE.since);

  return (
    <section aria-label="Perfil">
      <SpaceBanner />

      <div className="px-4 pb-3">
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="-mt-[clamp(24px,7.5vw,40px)]"
          >
            <Avatar ring className="h-[clamp(80px,25vw,134px)] w-[clamp(80px,25vw,134px)]" />
          </motion.div>

          <div className="flex items-center gap-2 pt-3">
            <a href={CV_URL} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Ver currículum" title="Currículum">
              <Icon name="file" size={18} />
            </a>
            <Link to="/contact/" className="icon-btn" aria-label="Enviar un mensaje" title="Mensaje">
              <Icon name="mail" size={18} />
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-white">
              Hablemos
            </a>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="flex items-center gap-1.5 text-[20px] font-extrabold leading-6">
            {PROFILE.name} <Verified size={20} />
          </h2>
          <p className="text-[15px] text-[var(--muted)]">@{PROFILE.handle}</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(0,186,124,.35)] bg-[var(--repost-soft)] px-2.5 py-1 text-[13px] font-medium text-[var(--repost)]">
          <span className="status-dot" aria-hidden="true" /> Disponible para nuevos proyectos
        </p>

        <div className="mt-3 text-[15px] leading-5">
          <p className="min-h-5 font-medium">
            <span className="sr-only">{ROLES.join(", ")}</span>
            <span aria-hidden="true">{role}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="mt-1">
            Convierto ideas en experiencias digitales claras, rápidas y memorables: webs, aplicaciones y landing pages con
            código limpio. <span className="text-[var(--accent)]">#React #Gatsby #NodeJS #Tailwind</span> 🚀
          </p>
        </div>

        <ul className="m-0 mt-3 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-[15px] text-[var(--muted)]">
          <li className="inline-flex items-center gap-1">
            <Icon name="location" size={17} /> {PROFILE.location}
          </li>
          <li className="inline-flex items-center gap-1">
            <Icon name="code" size={17} /> Frontend · Backend
          </li>
          <li className="inline-flex items-center gap-1">
            <Icon name="link" size={17} />
            <a href={PROFILE.site.href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
              {PROFILE.site.label}
            </a>
          </li>
          <li className="inline-flex items-center gap-1">
            <Icon name="calendar" size={17} /> Programando desde {PROFILE.since}
          </li>
        </ul>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
          <Stat value={projects.data?.length} label="Proyectos" to="/projects/" />
          <Stat value={services.data?.length} label="Servicios" to="/service/" />
          <Stat value={imagenes.length} label="Tecnologías" to="/?tab=stack" />
          <Stat value={years} label="Años de experiencia" to="/experiencia/" />
        </div>

        <SocialIcons className="mt-4 lg:hidden" />
      </div>
    </section>
  );
};

export default ProfileHeader;
