import React from "react";
import { motion } from "framer-motion";

const renderInlineMarkdown = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
};

const renderMarkdown = (markdown) => {
  const lines = markdown.split("\n").filter((line) => line.trim() !== "");
  const elements = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul
        key={`list-${elements.length}`}
        className="mt-3 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300"
      >
        {listItems.map((item, index) => (
          <li key={index}>{renderInlineMarkdown(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("- ")) {
      listItems.push(trimmedLine.slice(2));
      return;
    }

    flushList();

    if (trimmedLine.startsWith("# ")) {
      elements.push(
        <h2 key={elements.length} className="text-2xl font-semibold">
          {trimmedLine.slice(2)}
        </h2>
      );
      return;
    }

    if (trimmedLine.startsWith("## ")) {
      elements.push(
        <h3 key={elements.length} className="mt-8 text-xl font-bold">
          {trimmedLine.slice(3)}
        </h3>
      );
      return;
    }

    elements.push(
      <p key={elements.length} className="mt-2 text-red-400">
        {renderInlineMarkdown(trimmedLine)}
      </p>
    );
  });

  flushList();

  return elements;
};

export default function Experience() {
  const [experience, setExperience] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/experience")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar la experiencia");
        }

        return res.text();
      })
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar la experiencia");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="py-8 text-center">Cargando experiencia...</p>;
  }

  if (error) {
    return <p className="py-8 text-center text-red-500">{error}</p>;
  }

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <motion.div
        className="rounded-lg border border-gray-200 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {renderMarkdown(experience)}
      </motion.div>
    </section>
  );
}
