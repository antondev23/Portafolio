/* Datos del perfil compartidos por toda la web. */
export const PROFILE = {
  name: "Antonio Ortega",
  handle: "antondev23",
  role: "Desarrollador web",
  location: "Terrassa, Barcelona",
  site: { label: "antondev.es", href: "https://antondev.es" },
  since: "2022",
};

export const ROLES = ["Desarrollador web",  "Creador de contenido"];

export const CV_URL = "https://drive.google.com/file/d/1LoHgc9WMkzPvWBVyFZbhadT2s6oXZV-g/view?usp=sharing";
export const FORM_ACTION = "https://formsubmit.co/antonio.ortega0323@gmail.com";

export const WHATSAPP_URL = "https://wa.me/34678244907";
export const waLink = (text = "Hola Antonio, me gustaría hablar sobre un proyecto.") =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

/* Categoría que se muestra en "Tendencias" para cada tecnología del stack. */
export const STACK_CATEGORY = {
  "Tailwind CSS": "Frontend",
  Gatsby: "Frontend",
  Bootstrap: "Frontend",
  WordPress: "CMS",
  React: "Frontend",
  PHP: "Backend",
  "Node.js": "Backend",
  JavaScript: "Lenguaje",
  CSS3: "Frontend",
  HTML5: "Frontend",
  Vite: "Herramientas",
};

/* Convierte el markdown de /api/experience en entradas { title, date, points }. */
export const parseExperience = (markdown = "") =>
  markdown.split("\n").reduce((items, line) => {
    const value = line.trim();
    if (value.startsWith("## ")) items.push({ title: value.slice(3), date: "", points: [] });
    else if (items.length && value.startsWith("**")) items.at(-1).date = value.replaceAll("*", "");
    else if (items.length && value.startsWith("- ")) items.at(-1).points.push(value.slice(2));
    return items;
  }, []);

export const getHost = (link) => {
  try {
    return new URL(link).host;
  } catch {
    return link;
  }
};

export const projectImage = (image) =>
  image?.startsWith("http") ? image : `${process.env.GATSBY_API_URL}/img/${image}`;
