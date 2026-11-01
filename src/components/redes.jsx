import React from "react";

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SOCIALS = [
  {
    label: "GitHub",
    handle: "antondev23",
    href: "https://github.com/antondev23",
    icon: <svg {...ICON_PROPS}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
  },
  {
    label: "LinkedIn",
    handle: "antonio-ortega",
    href: "https://linkedin.com/in/antonio-ortega-43b3952b4",
    icon: <svg {...ICON_PROPS}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: "Instagram",
    handle: "anton.ort03",
    href: "https://www.instagram.com/anton.ort03/",
    icon: <svg {...ICON_PROPS}><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>,
  },
  {
    label: "TikTok",
    handle: "antonort23",
    href: "https://www.tiktok.com/@antonort23",
    icon: <svg {...ICON_PROPS}><path d="M9 12a4 4 0 1 0 4 4V3c.6 2.6 2.6 4.6 5.5 5" /></svg>,
  },
];

const Redes = ({ className = "" }) => (
  <ul className={`m-0 flex list-none flex-row justify-center gap-2.5 p-0 ${className}`}>
    {SOCIALS.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={`${social.label} · ${social.handle}`}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line-strong)] bg-[var(--bg-elev)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {social.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default Redes;
