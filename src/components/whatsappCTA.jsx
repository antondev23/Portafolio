import React from "react";
import { Link } from "gatsby";

const WHATSAPP_MESSAGE_URL =
  "https://wa.me/34678244907?text=Hola%20Antonio%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.";

/**
 * Llamada a la acción de contacto.
 * `showForm` añade un botón secundario hacia la página de contacto.
 */
const WhatsAppCTA = ({ showForm = false, align = "center" }) => (
  <div className={`mt-9 flex flex-col gap-4 ${align === "center" ? "items-center" : "items-start"}`}>
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a href={WHATSAPP_MESSAGE_URL} target="_blank" rel="noreferrer" className="button-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        Escríbeme por WhatsApp
      </a>
      {showForm && (
        <Link to="/contact" className="button-outline">
          Usar el formulario <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
    <p className="mono m-0 text-xs text-[var(--dim)]">{"// normalmente respondo en menos de 24 horas"}</p>
  </div>
);

export default WhatsAppCTA;
