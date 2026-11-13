import React from "react";

const SITE_NAME = "Antonio Ortega";
const DEFAULT_TITLE = "Antonio Ortega (@antondev23) — Desarrollador de web";
const DEFAULT_DESCRIPTION =
  "Portfolio de Antonio Ortega, desarrollador de web en Terrassa (Barcelona). Webs, aplicaciones y landing pages rápidas con React, Gatsby, Node.js y Tailwind CSS.";

/**
 * Metadatos comunes para la Head API de Gatsby.
 * Uso: export const Head = () => <Seo title="Proyectos" />
 */
const Seo = ({ title, description = DEFAULT_DESCRIPTION, children }) => {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;

  return (
    <>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <link rel="icon" href="/planet.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {children}
    </>
  );
};

export default Seo;
