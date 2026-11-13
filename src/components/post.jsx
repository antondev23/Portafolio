import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Icon, { Verified } from "./icons";
import Avatar from "./avatar";
import { showToast } from "./toast";
import { PROFILE } from "../modules/profile";

const share = async ({ title, url }) => {
  const shareUrl = url || window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title, url: shareUrl });
      return;
    }
    await navigator.clipboard.writeText(shareUrl);
    showToast("Enlace copiado al portapapeles");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("No se pudo compartir el enlace");
  }
};

/* Botón de acción con su color al pasar el ratón (--c) y su halo (--c-soft). */
const Action = ({ label, icon, color, active, onClick, to, children }) => {
  const style = { "--c": `var(--${color})`, "--c-soft": `var(--${color}-soft)` };
  const content = (
    <>
      <span className="action-halo">{children ?? <Icon name={icon} size={18.5} />}</span>
      <span className="sr-only">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="action" style={style} title={label}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={`action ${active ? "is-on" : ""}`} style={style} title={label} aria-pressed={active} onClick={onClick}>
      {content}
    </button>
  );
};

export const PostActions = ({ title, url }) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);

  return (
    <div className="post-actions">
      <Action label="Responder" icon="comment" color="accent" to="/contact/" />
      <Action
        label={reposted ? "Deshacer repost" : "Repostear"}
        icon="repost"
        color="repost"
        active={reposted}
        onClick={() => setReposted(!reposted)}
      />
      <Action label={liked ? "Ya no me gusta" : "Me gusta"} color="like" active={liked} onClick={() => setLiked(!liked)}>
        <motion.span
          key={liked ? "on" : "off"}
          initial={liked ? { scale: 0.4 } : false}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 520, damping: 14 }}
          className="grid place-items-center"
        >
          <Icon name="heart" size={18.5} filled={liked} />
        </motion.span>
      </Action>
      <Action label="Compartir" icon="share" color="accent" onClick={() => share({ title, url })} />
    </div>
  );
};

/**
 * Publicación del feed.
 * - `context`: línea superior (p. ej. "Fijado").
 * - `time`: fecha que aparece tras el usuario.
 * - `thread`: dibuja la línea que la une con la siguiente publicación del hilo.
 */
const Post = ({ context, contextIcon = "pin", time, thread = false, actions = true, shareTitle, shareUrl, children, className = "" }) => (
  <motion.article
    className={`post ${thread ? "is-thread" : ""} ${className}`}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {context && (
      <p className="post-context">
        <Icon name={contextIcon} size={14} strokeWidth={2.2} />
        {context}
      </p>
    )}
    <div className="flex gap-3">
      <div className="relative flex shrink-0 flex-col items-center">
        <Avatar className="h-10 w-10" />
        {thread && <span className="thread-line" aria-hidden="true" />}
      </div>
      <div className="min-w-0 flex-1">
        <header className="flex min-w-0 items-center gap-1 text-[15px] leading-5">
          <span className="truncate font-bold">{PROFILE.name}</span>
          <Verified size={17} />
          <span className="truncate text-[var(--muted)]">@{PROFILE.handle}</span>
          {time && (
            <>
              <span className="text-[var(--muted)]" aria-hidden="true">·</span>
              <span className="shrink-0 text-[var(--muted)]">{time}</span>
            </>
          )}
        </header>
        <div className="post-body">{children}</div>
        {actions && <PostActions title={shareTitle} url={shareUrl} />}
      </div>
    </div>
  </motion.article>
);

/* Esqueleto de carga con forma de publicación. */
export const PostSkeleton = ({ count = 2, media = true }) => (
  <div role="status" aria-label="Cargando publicaciones">
    {Array.from({ length: count }, (_, index) => (
      <div key={index} className="post flex gap-3" aria-hidden="true">
        <span className="skeleton h-10 w-10 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2.5 pt-1">
          <span className="skeleton block h-3.5 w-1/2 rounded-full" />
          <span className="skeleton block h-3.5 w-full rounded-full" />
          <span className="skeleton block h-3.5 w-4/5 rounded-full" />
          {media && <span className="skeleton mt-3 block aspect-[16/9] w-full rounded-2xl" />}
        </div>
      </div>
    ))}
  </div>
);

/* Estado de error con botón de reintento. */
export const FeedError = ({ what, onRetry }) => (
  <div className="post text-center" role="alert">
    <p className="text-[15px] text-[var(--muted)]">Algo salió mal al cargar {what}.</p>
    <button type="button" className="btn btn-accent mt-3" onClick={onRetry}>
      <Icon name="refresh" size={16} strokeWidth={2.2} /> Reintentar
    </button>
  </div>
);

export default Post;
