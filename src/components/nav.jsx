import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

export const WHATSAPP_URL = "https://wa.me/34678244907";

const links = [
  { to: "/#sobre-mi", label: "sobre-mí" },
  { to: "/#servicios", label: "servicios" },
  { to: "/#proyectos", label: "proyectos" },
  { to: "/#experiencia", label: "experiencia" },
  { to: "/#contacto", label: "contacto" },
];

export const Logo = () => (
  <Link to="/" className="mono text-[.95rem] font-semibold tracking-tight" aria-label="Antonio Ortega — inicio">
    <span className="tok-o">&lt;</span>
    antonio<span className="text-[var(--accent)]">.dev</span>
    <span className="tok-o"> /&gt;</span>
  </Link>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="page-wrap flex h-[72px] items-center justify-between gap-6" aria-label="Principal">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a key={link.label} className="nav-link" href={link.to}>
              <span className="num">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
          <a className="button-primary btn-sm" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line-strong)] text-[var(--text)] transition hover:border-[var(--accent)] lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>

        {isOpen && (
          <div id="menu-movil" className="absolute left-0 top-[72px] w-full border-b border-[var(--line)] bg-[var(--bg-elev)] py-6 lg:hidden">
            <div className="page-wrap flex flex-col gap-5">
              {links.map((link, index) => (
                <a key={link.label} onClick={() => setIsOpen(false)} className="nav-link text-sm" href={link.to}>
                  <span className="num">0{index + 1}.</span>
                  {link.label}
                </a>
              ))}
              <a className="button-primary w-fit" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Hablemos <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
