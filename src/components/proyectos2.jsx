import React from "react";
import { motion, useScroll } from "framer-motion";

const ProjectItem = ({ project, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <article className="relative flex min-h-[50vh] md:min-h-[55vh] items-center justify-center px-4">
      <motion.div
        ref={ref}
        className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-4 md:p-8 shadow-md dark:border-gray-700 dark:bg-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <span className="text-sm font-semibold text-red-400">
          Proyecto {index + 1} - {project.date}
        </span>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mt-4 h-40 md:h-48 w-full rounded-md object-cover"
          />
        )}

        <h3 className="mt-2 text-xl md:text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </motion.div>

      <figure className="sticky top-24 ml-6 hidden h-20 w-20 shrink-0 items-center justify-center md:flex">
        <svg width="75" height="75" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="fill-none stroke-gray-200 stroke-[8] dark:stroke-gray-700"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{ pathLength: scrollYProgress }}
            className="fill-none stroke-red-400 stroke-[8]"
            strokeLinecap="round"
          />
        </svg>
      </figure>
    </article>
  );
};

export default function Proyectos2() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los proyectos");
        }

        return res.json();
      })
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los proyectos");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="py-8 text-center">Cargando proyectos...</p>;
  }

  if (error) {
    return <p className="py-8 text-center text-red-500">{error}</p>;
  }

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mt-8">
        <a href="">

        {projects.map((project, index) => (
          <ProjectItem
            key={project.id ?? project.title}
            project={project}
            index={index}
          />
        ))}
        </a>
      </div>
    </section>
  );
}
