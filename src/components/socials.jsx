import React from "react";
import Icon from "./icons";

export const SOCIALS = [
  { label: "GitHub", handle: "antondev23", href: "https://github.com/antondev23", icon: "github", bio: "Código de mis proyectos" },
  { label: "LinkedIn", handle: "antonio-ortega", href: "https://linkedin.com/in/antonio-ortega-43b3952b4", icon: "linkedin", bio: "Trayectoria profesional" },
  { label: "Instagram", handle: "anton.ort03", href: "https://www.instagram.com/anton.ort03/", icon: "instagram", bio: "El proceso detrás de cada proyecto" },
  { label: "TikTok", handle: "antonort23", href: "https://www.tiktok.com/@antonort23", icon: "tiktok", bio: "Vídeos cortos sobre desarrollo" },
];

/* Fila compacta de iconos de redes. */
export const SocialIcons = ({ className = "" }) => (
  <ul className={`m-0 flex list-none flex-wrap gap-2 p-0 ${className}`}>
    {SOCIALS.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.label} (@${social.handle})`}
          title={`${social.label} · @${social.handle}`}
          className="icon-btn"
        >
          <Icon name={social.icon} size={18} />
        </a>
      </li>
    ))}
  </ul>
);
