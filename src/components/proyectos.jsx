import React from "react";
import { motion } from "framer-motion";

const parseExperienceMarkdown = (markdown) => {
  const lines = markdown.split("\n").map((line) => line.trim());
  const titleLine = lines.find((line) => line.startsWith("# "));
  const entries = [];
  let currentEntry = null;

  lines.forEach((line) => {
    if (!line) {
      return;
    }

    if (line.startsWith("## ")) {
      currentEntry = {
        title: line.slice(3),
        date: "",
        description: [],
      };
      entries.push(currentEntry);
      return;
    }

    if (!currentEntry) {
      return;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      currentEntry.date = line.slice(2, -2);
      return;
    }

    if (line.startsWith("- ")) {
      currentEntry.description.push(line.slice(2));
    }
  });

  return {
    title: titleLine ? titleLine.slice(2) : "Experiencia",
    entries,
  };
};

const Proyectos = () => {
  const [experience, setExperience] = React.useState({
    title: "Experiencia",
    entries: [],
  });
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
        setExperience(parseExperienceMarkdown(data));
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const timelineVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">

      <div className="relative pb-8">
        <div className="absolute left-1/2 top-0 hidden md:block h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-400 to-blue-400" />

        <div className="relative z-10 space-y-8 md:space-y-12">
          {experience.entries.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.date}`}
              className={`flex flex-col md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={
                index % 2 === 0 ? timelineVariants : timelineVariantsRight
              }
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md dark:bg-gray-800">
                  <div className="p-4 md:p-6">
                    <span className="mb-2 inline-block rounded-full bg-red-400 px-3 py-1 text-xs md:text-sm font-semibold text-white">
                      {item.date}
                    </span>
                    <h3 className="mb-3 text-base md:text-lg font-bold">{item.title}</h3>
                    <ul className="list-disc space-y-2 pl-5 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {item.description.map((description) => (
                        <li key={description}>{description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex w-full md:w-4 md:flex-shrink-0 justify-start md:justify-center my-4 md:my-0">
                <motion.div
                  className="h-4 w-4 rounded-full border-4 border-white bg-red-400 shadow-md dark:border-gray-900"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
