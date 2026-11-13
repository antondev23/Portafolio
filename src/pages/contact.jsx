import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout, { PageHeader } from "../components/layout";
import Seo from "../components/seo";
import Avatar from "../components/avatar";
import Icon, { Verified } from "../components/icons";
import { FORM_ACTION, PROFILE, waLink } from "../modules/profile";

const MAX = 1000;

/* Anillo de progreso de caracteres, como en el editor de publicaciones. */
const CharRing = ({ length }) => {
  const ratio = Math.min(length / MAX, 1);
  const left = MAX - length;
  const color = left <= 0 ? "var(--like)" : left <= 100 ? "#ffd400" : "var(--accent)";
  const r = 9;
  const circumference = 2 * Math.PI * r;

  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)]">
      {left <= 100 && <span style={{ color }}>{left}</span>}
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="-rotate-90">
        <circle cx="12" cy="12" r={r} fill="none" stroke="var(--line)" strokeWidth="2" />
        <circle
          cx="12"
          cy="12"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - ratio)}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset .2s" }}
        />
      </svg>
    </span>
  );
};

/* Formulario de contacto con forma de "nueva publicación". Envía con FormSubmit, igual que antes. */
const Compose = () => {
  const [message, setMessage] = useState("");

  return (
    <form action={FORM_ACTION} method="POST" className="post !cursor-auto hover:!bg-transparent">
      <div className="flex gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--bg-elev)] text-[var(--muted)]">
          <Icon name="user" size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="mb-1 inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-3 py-0.5 text-[13px] font-bold text-[var(--accent)]">
            Para: {PROFILE.name} <Verified size={14} />
          </p>

          <div className="grid gap-x-4 sm:grid-cols-2">
            <label className="compose-field">
              <span className="sr-only">Nombre</span>
              <input type="text" name="name" placeholder="Tu nombre" autoComplete="name" required />
            </label>
            <label className="compose-field">
              <span className="sr-only">Email</span>
              <input type="email" name="email" placeholder="tu@correo.com" autoComplete="email" required />
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Mensaje</span>
            <textarea
              name="message"
              rows={5}
              maxLength={MAX}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="¿Qué quieres construir?"
              className="compose-textarea"
            />
          </label>

          <p className="flex items-center gap-1.5 border-b border-[var(--line)] pb-3 text-[14px] font-bold text-[var(--accent)]">
            <Icon name="globe" size={16} strokeWidth={2.2} /> Solo Antonio puede leer este mensaje
          </p>

          <div className="flex items-center justify-between gap-3 pt-3">
            <span className="text-[13px] text-[var(--muted)]">Todos los campos son obligatorios</span>
            <span className="flex items-center gap-3">
              {message.length > 0 && <CharRing length={message.length} />}
              <button type="submit" className="btn btn-white" disabled={!message.trim()}>
                Enviar
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

const Bubble = ({ children, delay }) => (
  <motion.p
    initial={{ opacity: 0, y: 8, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    className="w-fit max-w-[85%] rounded-3xl rounded-bl-md bg-[#2f3336] px-4 py-2.5 text-[15px] leading-5"
  >
    {children}
  </motion.p>
);

/* Vista previa de chat que lleva a WhatsApp. */
const DirectMessage = () => (
  <section className="border-b border-[var(--line)] px-4 py-5" aria-labelledby="mensaje-directo">
    <div className="flex flex-col items-center text-center">
      <Avatar className="h-16 w-16" />
      <h2 id="mensaje-directo" className="mt-2 flex items-center gap-1 text-[15px] font-bold">
        {PROFILE.name} <Verified size={16} />
      </h2>
      <p className="text-[15px] text-[var(--muted)]">@{PROFILE.handle}</p>
      <p className="mt-1 text-[13px] text-[var(--muted)]">Suele responder en menos de 24 horas</p>
    </div>

    <div className="mt-5 flex flex-col gap-1.5">
      <Bubble delay={0.1}>¡Hola! 👋 Soy Antonio.</Bubble>
      <Bubble delay={0.5}>Cuéntame tu idea, objetivo o problema y encontraremos la mejor forma de abordarlo.</Bubble>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="typing self-end"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </motion.span>
    </div>

    <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-accent mt-5 w-full">
      <Icon name="send" size={16} strokeWidth={2.2} /> Abrir chat en WhatsApp
    </a>
  </section>
);

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <PageHeader title="Mensajes" subtitle="Construyamos algo bueno" />
    <DirectMessage />
    <h2 className="px-4 pb-1 pt-4 text-[20px] font-extrabold">¿Prefieres el correo?</h2>
    <Compose />
  </Layout>
);

export default ContactPage;

export const Head = () => <Seo title="Contacto" description="Escríbeme para hablar de tu próximo proyecto web o de software." />;
