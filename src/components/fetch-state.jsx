import React from "react";

/* Estados de carga y error con apariencia de salida de consola. */
export const FetchLoading = ({ endpoint, className = "mt-12" }) => (
  <div className={`card mono p-6 text-sm text-[var(--muted)] ${className}`} role="status">
    <p className="m-0">
      <span className="prompt">$</span> fetch <span className="tok-s">"{endpoint}"</span>
    </p>
    <p className="m-0 mt-2 inline-flex items-center gap-3">
      <span className="h-3 w-3 animate-spin rounded-full border-2 border-[var(--line-strong)] border-t-[var(--accent)]" aria-hidden="true" />
      cargando…
    </p>
  </div>
);

export const FetchError = ({ endpoint, message, className = "mt-12" }) => (
  <div className={`card mono p-6 text-sm ${className}`} role="alert">
    <p className="m-0 text-[var(--muted)]">
      <span className="prompt">$</span> fetch <span className="tok-s">"{endpoint}"</span>
    </p>
    <p className="m-0 mt-2 text-[var(--syn-prop)]">✖ {message}</p>
  </div>
);
