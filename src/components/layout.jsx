import React from "react";
import { Link } from "gatsby";
import Starfield from "./starfield";
import LeftNav, { NAV_LINKS, isActive } from "./left-nav";
import RightRail from "./right-rail";
import Toast from "./toast";
import Icon, { LogoMark } from "./icons";
import Avatar from "./avatar";
import { waLink } from "../modules/profile";

/* Fondo de estrellas animadas. Ponlo a true para volver a mostrarlas. */
const SHOW_STARS = false;

/* Cabecera fija de la columna central: flecha atrás (o avatar en móvil), título y subtítulo. */
export const PageHeader = ({ title, subtitle, back = true }) => (
  <div className="page-header">
    {back ? (
      <Link to="/" className="icon-btn !h-9 !w-9 !border-0" aria-label="Volver al inicio">
        <Icon name="back" size={20} strokeWidth={2.2} />
      </Link>
    ) : (
      <Link to="/" className="sm:hidden" aria-label="Inicio">
        <Avatar className="h-8 w-8" />
      </Link>
    )}
    <div className="min-w-0 flex-1">
      <h1 className="truncate text-[20px] font-extrabold leading-6">{title}</h1>
      {subtitle && <p className="truncate text-[13px] leading-4 text-[var(--muted)]">{subtitle}</p>}
    </div>
    <LogoMark size={26} className="sm:hidden" />
  </div>
);

const MobileTabBar = ({ pathname }) => (
  <>
    <a href={waLink()} target="_blank" rel="noreferrer" className="fab sm:hidden" aria-label="Hablemos por WhatsApp">
      <Icon name="feather" size={22} strokeWidth={2.2} />
    </a>
    <nav className="mobile-tabbar sm:hidden" aria-label="Principal">
      {NAV_LINKS.map((link) => {
        const active = isActive(pathname, link.to);
        return (
          <Link key={link.to} to={link.to} aria-label={link.label} aria-current={active ? "page" : undefined} className="grid flex-1 place-items-center">
            <Icon name={link.icon} size={25} filled={active && link.icon === "home"} strokeWidth={active ? 2.4 : 1.8} className={active ? "text-white" : "text-[var(--muted)]"} />
          </Link>
        );
      })}
    </nav>
  </>
);

/**
 * Estructura de red social: menú lateral · columna central (600px) · barra derecha.
 */
const Layout = ({ location, children }) => {
  const pathname = location?.pathname ?? "/";

  return (
    <div className="relative min-h-screen" id="top">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      {SHOW_STARS && <Starfield />}
      <div className="relative z-10 mx-auto flex justify-center">
        <LeftNav pathname={pathname} />
        <main id="contenido" className="feed-column">
          {children}
        </main>
        <RightRail />
      </div>
      <MobileTabBar pathname={pathname} />
      <Toast />
    </div>
  );
};

export default Layout;
