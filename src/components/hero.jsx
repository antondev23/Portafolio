import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import ScrollIndicator from "./scrollIndicador";
import Redes from "./redes";



{/* Hero: imagen izquierda + about derecha */ }
const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 p-4 mt-12">
      {/* Imagen */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src="https://i.postimg.cc/qvcJXbF5/Gemini-Generated-Image-8jd81d8jd81d8jd8.png"
          alt="Imagen de Portfolio"
          className="animate-fadeDown rounded-lg shadow-lg w-84 h-84 object-cover"
        />
      </div>

      {/* About me */}
      <aside className="w-full md:w-2/3">
        <h1 className="text-red-400 italic text-4xl mb-4">
          &lt;Software Developer/&gt;
        </h1>

        <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
          <p>
            Hola, soy Antonio Ortega. Estudiante, desarrollador de software y creador de contenido, con ganas de crecer dia a dia y aportar mucho valor a los demas."


          </p>
          <p>

            En este portfolio encontrarás una selección de mis proyectos y habilidades en software y desarrollo web.

          </p>
         
          <Redes />

          <div className="scroll">
            {/* <motion.div
              className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center mt-8 mx-auto"
              animate={{ y: [0, 8, 0], opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <motion.div
                className="w-2 h-2 bg-gray-500 rounded-full mt-1"
                animate={{ y: [0, 18, 18], opacity: [1, 1, 0] }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div> */}

            <ScrollIndicator />

          </div>




        </div>
      </aside>
    </section>
  );
}
export default Hero;
