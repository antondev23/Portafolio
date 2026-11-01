import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Window from "./window";

const CV_URL = "https://drive.google.com/file/d/1aztLGW4E8SgGh9CUAaBu36yzHA_00d-8/view?usp=sharing";
const ROLES = ["Desarrollador de software", "Desarrollador web", "Creador de contenido"];

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

/* Código del editor: cada línea es una lista de [tipo, texto]. */
const CODE = [
  [["c", "// perfil.js — sobre mí, en código"]],
  [["k", "const "], ["v", "antonio"], ["o", " = {"]],
  [["v", "  "], ["p", "nombre"], ["o", ": "], ["s", '"Antonio Ortega"'], ["o", ","]],
  [["v", "  "], ["p", "rol"], ["o", ": "], ["s", '"Desarrollador de software"'], ["o", ","]],
  [["v", "  "], ["p", "ubicacion"], ["o", ": "], ["s", '"Terrassa, Barcelona"'], ["o", ","]],
  [["v", "  "], ["p", "stack"], ["o", ": ["], ["s", '"React"'], ["o", ", "], ["s", '"Gatsby"'], ["o", ", "], ["s", '"Node.js"'], ["o", ", "], ["s", '"Tailwind"'], ["o", "],"]],
  [["v", "  "], ["p", "disponible"], ["o", ": "], ["n", "true"], ["o", ","]],
  [["v", "  "], ["f", "hablemos"], ["o", ": ("], ["v", "idea"], ["o", ") => "], ["f", "construir"], ["o", "("], ["v", "idea"], ["o", "),"]],
  [["o", "};"]],
  [["v", ""]],
  [["k", "export default "], ["v", "antonio"], ["o", ";"]],
];

const CodeWindow = () => (
  <Window title="perfil.js" meta="JavaScript · UTF-8" className="relative">
    <pre className="code-block" aria-label="Perfil de Antonio escrito como un objeto de JavaScript">
      <code>
        {CODE.map((line, lineIndex) => (
          <span key={lineIndex} className="code-line">
            {line.map(([type, value], tokenIndex) => (
              <span key={tokenIndex} className={`tok-${type}`}>{value}</span>
            ))}
            {lineIndex === CODE.length - 1 && <span className="caret" aria-hidden="true" />}
          </span>
        ))}
      </code>
    </pre>
  </Window>
);

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section id="inicio" className="page-wrap grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="chip chip-accent">
          <span className="status-dot" aria-hidden="true" />
          Disponible para nuevos proyectos
        </span>

        <p className="mono mt-8 text-sm text-[var(--dim)]">
          <span className="tok-c">{"// hola mundo, soy"}</span>
        </p>

        <h1 className="mt-3 text-[clamp(2.9rem,7vw,5.6rem)] font-extrabold leading-[.95] tracking-[-.045em]">
          Antonio <span className="gradient-text">Ortega</span>
        </h1>

        <p className="mono mt-6 min-h-[1.75em] text-[clamp(1.05rem,2vw,1.35rem)] text-[var(--text)]">
          <span className="prompt" aria-hidden="true">&gt; </span>
          <span className="sr-only">{ROLES.join(", ")}</span>
          <span aria-hidden="true">{role}</span>
          <span className="caret" aria-hidden="true" />
        </p>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
          Convierto ideas en experiencias digitales <span className="text-[var(--text)]">claras, rápidas y memorables</span>:
          webs, aplicaciones y landing pages construidas con código limpio y pensadas para dar resultados.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#proyectos">
            Ver proyectos <span aria-hidden="true">→</span>
          </a>
          <a className="button-outline" href={CV_URL} target="_blank" rel="noreferrer">
            Currículum <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mono mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[var(--muted)]">
          <span className="inline-flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Terrassa, Barcelona
          </span>
          <span className="inline-flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            Frontend · Backend
          </span>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full min-w-0"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[24px] bg-[radial-gradient(closest-side,rgba(61,220,151,.16),transparent)] blur-2xl" aria-hidden="true" />
        <CodeWindow />
        <div className="mono absolute -bottom-5 left-6 hidden items-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--bg-panel)] px-3 py-2 text-[.72rem] text-[var(--muted)] shadow-xl sm:inline-flex">
          <span className="tok-n">⎇</span> main
          <span className="text-[var(--dim)]">·</span>
          <span className="text-[var(--accent)]">✓</span> listo para producción
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
