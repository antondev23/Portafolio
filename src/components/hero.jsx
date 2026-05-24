import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./scrollIndicador";
import Redes from "./redes";

// 1. Variantes de animación extraídas fuera del componente
//    (evita recrearlas en cada render)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    // 2. <section> con role semántico correcto y id para anclas de navegación
    <section
      id="hero"
      aria-label="Presentación"
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 p-4 mt-12"
    >
      {/* Imagen */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center md:justify-start px-2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 3. Atributos de rendimiento: loading="lazy" + fetchpriority
            fetchpriority="high" porque es la imagen principal (LCP)         */}
        <img
          src="https://i.postimg.cc/qvcJXbF5/Gemini-Generated-Image-8jd81d8jd81d8jd8.png"
          alt="Foto de Antonio Ortega"
          width={336}
          height={336}
          className="rounded-lg shadow-lg w-full max-w-sm md:w-84 md:h-84 object-cover sm:w-20 sm:h-50"
        />
      </motion.div>

      {/* About me */}
      {/* 4. <aside> es incorrecto aquí — es el contenido PRINCIPAL de la página */}
      <motion.div
        className="w-full md:w-2/3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-red-400 italic text-4xl mb-4"
          variants={itemVariants}
        >
          {/* 5. Escapar < y > con entidades HTML es correcto,
              pero en JSX puedes usar los caracteres directamente entre {} */}
          {"<Software Developer/>"}
        </motion.h1>

        <motion.div
          className="prose dark:prose-invert text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          <p>
            Hola, soy Antonio Ortega. Estudiante, desarrollador de software y
            creador de contenido, con ganas de crecer día a día y aportar valor
            a los demás. Aquí encontrarás una selección de mis proyectos y
            habilidades en desarrollo web y software.
          </p>
        </motion.div>

        {/* 6. Redes y CV fuera del <div className="prose"> 
            — prose aplica estilos tipográficos que distorsionan botones e iconos */}
        <motion.div variants={itemVariants}>
          <Redes />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-4 text-center ">
          <a
            href="https://drive.google.com/file/d/15REwrchJAPHO3pLsIv_yQQpn9vBVcSRD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-200"
          >
            {/* 7. Icono de descarga para reforzar la acción visualmente */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Ver mi CV
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6">
          <ScrollIndicator />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;