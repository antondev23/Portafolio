import React, { useMemo, useState } from "react";
import imagenes from "../modules/image-float";
import { STACK_CATEGORY, waLink } from "../modules/profile";
import Icon from "./icons";
import { SOCIALS } from "./socials";

const TrendList = ({ query }) => {
  const [expanded, setExpanded] = useState(false);
  const filtered = useMemo(
    () => imagenes.filter((tech) => tech.alt.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );
  const visible = expanded || query ? filtered : filtered.slice(0, 5);

  return (
    <section className="rail-card" aria-labelledby="tendencias">
      <h2 id="tendencias" className="rail-title">Tendencias en mi stack</h2>
      {visible.length === 0 && <p className="px-4 pb-4 text-[15px] text-[var(--muted)]">Nada por aquí con “{query}”.</p>}
      <ul className="m-0 list-none p-0">
        {visible.map((tech, index) => (
          <li key={tech.alt} className="rail-row">
            <div className="min-w-0">
              <p className="text-[13px] text-[var(--muted)]">
                {index + 1} · {STACK_CATEGORY[tech.alt] ?? "Stack"} · Tendencia
              </p>
              <p className="text-[15px] font-bold">#{tech.alt.replace(/[\s.]/g, "")}</p>
              <p className="text-[13px] text-[var(--muted)]">Lo uso en mis proyectos</p>
            </div>
            <img src={tech.src} alt="" width={30} height={30} className="h-[30px] w-[30px] object-contain" draggable="false" />
          </li>
        ))}
      </ul>
      {!query && filtered.length > 5 && (
        <button type="button" className="rail-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Mostrar menos" : "Mostrar más"}
        </button>
      )}
    </section>
  );
};

const WhoToFollow = () => (
  <section className="rail-card" aria-labelledby="a-quien-seguir">
    <h2 id="a-quien-seguir" className="rail-title">Sígueme en</h2>
    <ul className="m-0 list-none p-0">
      {SOCIALS.map((social) => (
        <li key={social.label} className="rail-row !items-center">
          <span className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)]">
              <Icon name={social.icon} size={19} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[15px] font-bold">{social.label}</span>
              <span className="block truncate text-[15px] text-[var(--muted)]">@{social.handle}</span>
            </span>
          </span>
          <a href={social.href} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-sm shrink-0" aria-label={`Seguir en ${social.label}`}>
            Seguir
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const RightRail = () => {
  const [query, setQuery] = useState("");

  return (
    <aside className="hidden shrink-0 lg:block lg:w-[300px] lg:pl-6 xl:w-[350px] xl:pl-8" aria-label="Información adicional">
      <div className="sticky top-0 flex max-h-screen flex-col gap-4 overflow-y-auto pb-6 [scrollbar-width:none] [&>*]:shrink-0">
        <div className="sticky top-0 z-10 bg-black py-1.5">
          <label className="search-box">
            <Icon name="search" size={18} />
            <span className="sr-only">Buscar tecnología</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar tecnología" />
          </label>
        </div>

        <section className="rail-card px-4 py-3" aria-labelledby="disponible">
          <h2 id="disponible" className="text-[20px] font-extrabold leading-6">¿Tienes un proyecto en órbita?</h2>
          <p className="mt-2 text-[15px] leading-5 text-[var(--text)]">
            Estoy disponible para webs, aplicaciones y landing pages. Cuéntame tu idea y lo despegamos juntos.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-accent mt-3">
            Hablemos
          </a>
        </section>

        <TrendList query={query} />
        <WhoToFollow />

        <p className="px-4 text-[13px] leading-5 text-[var(--muted)]">
          © {new Date().getFullYear()} Antonio Ortega · Diseñado y desarrollado por mí con Gatsby, React y Tailwind CSS.
        </p>
      </div>
    </aside>
  );
};

export default RightRail;
