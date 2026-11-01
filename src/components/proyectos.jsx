import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FetchError, FetchLoading } from "./fetch-state";

const parseExperience = (markdown) =>
  markdown.split("\n").reduce((items, line) => {
    const value = line.trim();
    if (value.startsWith("## ")) items.push({ title: value.slice(3), date: "", points: [] });
    else if (items.length && value.startsWith("**")) items.at(-1).date = value.replaceAll("*", "");
    else if (items.length && value.startsWith("- ")) items.at(-1).points.push(value.slice(2));
    return items;
  }, []);

/* Hash corto y estable a partir del título, solo decorativo (estilo commit). */
const shortHash = (text) => {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

/* Experiencia mostrada como un `git log --graph`. */
const Proyectos = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/api/experience`)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((data) => setEntries(parseExperience(data)))
      .catch(() => setError(true));
  }, []);

  if (error) return <FetchError endpoint="/api/experience" message="La experiencia no está disponible en este momento." />;
  if (!entries.length) return <FetchLoading endpoint="/api/experience" />;

  return (
    <div className="mt-12">
      <p className="mono m-0 mb-8 text-sm text-[var(--muted)]">
        <span className="prompt">~/<span className="path">antonio</span> $</span> <span className="tok-v">git log --graph --oneline</span>
      </p>

      <ol className="relative m-0 list-none border-l border-dashed border-[var(--line-strong)] p-0 pl-8 md:pl-10">
        {entries.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="relative pb-12 last:pb-0"
          >
            <span
              className={`absolute top-1.5 -left-[calc(2rem+6px)] h-3 w-3 rounded-full border-2 md:-left-[calc(2.5rem+6px)] ${
                index === 0 ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_0_4px_var(--accent-soft)]" : "border-[var(--line-strong)] bg-[var(--bg)]"
              }`}
              aria-hidden="true"
            />

            <div className="mono flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
              <span className="tok-t">{shortHash(item.title)}</span>
              {index === 0 && (
                <span className="text-[var(--syn-op)]">
                  (<span className="text-[var(--accent)]">HEAD -&gt; main</span>)
                </span>
              )}
              {item.date && <span className="chip !py-1">{item.date}</span>}
            </div>

            <div className="card mt-4 p-6">
              <h3 className="m-0 text-xl font-semibold tracking-[-.02em]">{item.title}</h3>
              <ul className="m-0 mt-4 list-none space-y-2.5 p-0 text-[.95rem] leading-7 text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mono select-none text-[var(--accent)]" aria-hidden="true">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Proyectos;
