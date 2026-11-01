import React from "react";

/**
 * Cabecera de sección con estilo de comentario de código:  // 02. proyectos
 */
const SectionHeader = ({ index, label, title, lead, align = "left", as: Tag = "h2", className = "" }) => {
  const centered = align === "center";

  return (
    <header className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      <p className="section-kicker mb-4">
        <span className="dim">{"// "}</span>
        {index && <span>{index}. </span>}
        {label}
      </p>
      <Tag className={`section-heading ${centered ? "mx-auto" : ""} max-w-3xl`}>{title}</Tag>
      {lead && <p className={`section-lead mt-5 ${centered ? "mx-auto" : ""}`}>{lead}</p>}
    </header>
  );
};

export default SectionHeader;
