import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Window from "./window";
import SectionHeader from "./section-header";

const facts = [
  { key: "ubicacion", value: '"Terrassa, Barcelona"', tone: "tok-s" },
  { key: "enfoque", value: '["frontend", "backend"]', tone: "tok-s" },
  { key: "creaContenido", value: "true", tone: "tok-n" },
  { key: "disponible", value: "true", tone: "tok-n" },
];

const Prompt = ({ children }) => (
  <p className="m-0">
    <span className="prompt">~/<span className="path">antonio</span> $</span> <span className="tok-v">{children}</span>
  </p>
);

const About = () => (
  <section id="sobre-mi" className="section">
    <div className="page-wrap">
      <SectionHeader index="01" label="sobre-mí" title={<>Código limpio, <span className="accent">ideas claras</span>.</>} />

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <Window title="perfil.webp" meta="520 × 650" dotColor="var(--syn-func)">
            <StaticImage
              src="../images/perfil2.webp"
              alt="Retrato de Antonio Ortega"
              width={520}
              quality={90}
              placeholder="blurred"
              formats={["auto", "webp"]}
              className="block aspect-[4/5] w-full object-cover grayscale-[35%] transition duration-500 hover:grayscale-0"
            />
          </Window>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Window title="bash — sobre-mi" meta="zsh" dotColor="var(--accent)" bodyClassName="terminal-body space-y-5">
            <div>
              <Prompt>whoami</Prompt>
              <p className="m-0 mt-1 text-[var(--muted)]">Antonio Ortega — desarrollador de software y creador de contenido.</p>
            </div>

            <div>
              <Prompt>cat sobre-mi.md</Prompt>
              <div className="mt-2 space-y-4 font-sans text-[.98rem] leading-7 text-[var(--muted)]">
                <p className="m-0">
                  Convierto ideas en <span className="text-[var(--text)]">experiencias digitales claras, rápidas y memorables</span>.
                  Trabajo tanto en el frontend como en el backend con React, Gatsby, Node.js y Tailwind CSS, construyendo
                  componentes reutilizables y consumiendo APIs propias.
                </p>
                <p className="m-0">
                  Antes de dedicarme al desarrollo trabajé como técnico de sistemas, lo que me dio una base sólida
                  resolviendo incidencias y entendiendo lo que necesita cada usuario. Hoy comparto en redes el proceso
                  de los proyectos que construyo.
                </p>
              </div>
            </div>

            <div>
              <Prompt>node -p "require('./antonio.json')"</Prompt>
              <div className="mt-2">
                <span className="tok-o">{"{"}</span>
                {facts.map((fact) => (
                  <div key={fact.key} className="pl-5">
                    <span className="tok-p">{fact.key}</span>
                    <span className="tok-o">: </span>
                    <span className={fact.tone}>{fact.value}</span>
                    <span className="tok-o">,</span>
                  </div>
                ))}
                <span className="tok-o">{"}"}</span>
              </div>
            </div>

            <Prompt><span className="caret" aria-hidden="true" /></Prompt>
          </Window>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
