import React from "react";
import Window from "./window";

const Field = ({ id, label, hint, children }) => (
  <div>
    <label htmlFor={id} className="field-label">
      <span className="tok-k">const </span>
      <span className="tok-v">{label}</span>
      <span className="tok-o"> =</span>
      {hint && <span className="tok-c">{` // ${hint}`}</span>}
    </label>
    {children}
  </div>
);

const Formulario = () => (
  <Window title="nuevo-mensaje.js" meta="formsubmit" className="mx-auto mt-4 max-w-2xl text-left">
    <form action="https://formsubmit.co/antonio.ortega0323@gmail.com" method="POST" className="space-y-6 p-6 md:p-8">
      <Field id="name" label="nombre">
        <input id="name" className="field" type="text" name="name" placeholder='"Tu nombre"' autoComplete="name" required />
      </Field>
      <Field id="email" label="email">
        <input id="email" className="field" type="email" name="email" placeholder='"tu@correo.com"' autoComplete="email" required />
      </Field>
      <Field id="message" label="mensaje" hint="cuéntame tu idea">
        <textarea id="message" className="field" name="message" rows={6} placeholder='"Hola Antonio, quiero construir…"' required />
      </Field>
      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="mono m-0 text-xs text-[var(--dim)]">{"// todos los campos son obligatorios"}</p>
        <button className="button-primary w-full sm:w-auto" type="submit">
          enviar(mensaje) <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  </Window>
);

export default Formulario;
