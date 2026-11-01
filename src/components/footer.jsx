import React from "react";
import Redes from "./redes";
import { Logo } from "./nav";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-[var(--line)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <Logo />
          <p className="mono m-0 mt-3 text-xs text-[var(--dim)]">{"// diseñado y desarrollado por Antonio Ortega"}</p>
        </div>
        <Redes />
      </div>

      {/* Barra de estado estilo editor */}
      <div className="statusbar">
        <div className="page-wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><span className="tok-n">⎇</span> main</span>
            <span className="inline-flex items-center gap-2"><span className="status-dot" aria-hidden="true" /> disponible</span>
            <span className="hidden sm:inline">Gatsby · React · Tailwind</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {year} Antonio Ortega</span>
            <span className="hidden sm:inline">UTF-8</span>
            <a href="#top" className="transition">↑ volver arriba</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
