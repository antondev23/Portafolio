import React from "react";
import { Link } from "gatsby";
import Icon, { LogoMark, Verified } from "./icons";
import Avatar from "./avatar";
import { CV_URL, PROFILE, waLink } from "../modules/profile";

export const NAV_LINKS = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/projects/", label: "Proyectos", icon: "rocket" },
  { to: "/service/", label: "Servicios", icon: "sparkles" },
  { to: "/experiencia/", label: "Experiencia", icon: "briefcase" },
  { to: "/contact/", label: "Mensajes", icon: "mail" },
];

const normalize = (path = "/") => (path.endsWith("/") ? path : `${path}/`);
export const isActive = (pathname, to) => normalize(pathname) === normalize(to);

const LeftNav = ({ pathname }) => (
  <header className="sticky top-0 hidden h-screen shrink-0 sm:flex sm:w-[88px] xl:w-[275px]">
    <div className="flex h-full w-full flex-col items-center justify-between px-2 py-1 xl:items-stretch xl:px-3">
      <div className="flex flex-col items-center gap-1 xl:items-stretch">
        <Link to="/" className="nav-item !p-3 xl:w-fit" aria-label="Inicio">
          <LogoMark size={30} />
        </Link>

        <nav aria-label="Principal" className="flex flex-col items-center gap-1 xl:items-stretch">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-item ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                title={link.label}
              >
                <Icon name={link.icon} size={26} filled={active && link.icon === "home"} strokeWidth={active ? 2.4 : 1.9} />
                <span className="hidden xl:inline">{link.label}</span>
              </Link>
            );
          })}
          <a href={CV_URL} target="_blank" rel="noreferrer" className="nav-item" title="Currículum">
            <Icon name="file" size={26} />
            <span className="hidden xl:inline">Currículum</span>
          </a>
        </nav>

        <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-white btn-lg mt-4 hidden w-full xl:inline-flex">
          Hablemos
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="btn btn-white mt-4 !h-[52px] !w-[52px] !p-0 xl:hidden"
          aria-label="Hablemos por WhatsApp"
          title="Hablemos"
        >
          <Icon name="feather" size={22} strokeWidth={2.2} />
        </a>
      </div>

      <Link to="/" className="nav-item mb-3 !gap-3 xl:!px-3" title={PROFILE.name}>
        <Avatar className="h-10 w-10" />
        <span className="hidden min-w-0 text-left leading-tight xl:block">
          <span className="flex items-center gap-1 text-[15px] font-bold">
            {PROFILE.name} <Verified size={16} />
          </span>
          <span className="block text-[15px] font-normal text-[var(--muted)]">@{PROFILE.handle}</span>
        </span>
      </Link>
    </div>
  </header>
);

export default LeftNav;
