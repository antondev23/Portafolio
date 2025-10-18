import React from "react";
import { StaticImage } from "gatsby-plugin-image";

{/* Hero: imagen izquierda + about derecha */ }
const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
      {/* Imagen */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src="https://i.postimg.cc/TP9QwqjG/IMG-4220.avif"
          alt="Imagen de Portfolio"
          className="animate-fadeDown rounded-lg shadow-lg w-64 h-64 object-cover"
        />
      </div>

      {/* About me */}
      <aside className="w-full md:w-2/3">
        <h1 className="text-red-400 italic animate-fadeDown text-4xl mb-4">
          &lt;Software Developer/&gt;
        </h1>

        <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
          <p>
            Hola, soy Antonio Ortega.
            Estudiante, desarrollador de software y creador de contenido, con ganas de crecer dia a dia y aportar mucho valor a los demas.
          </p>
          <p>
            En este portfolio encontrarás una selección de mis proyectos y habilidades en desarrollo web y software.
          </p>
          <div className="container-fluid flex flex-row gap-4">
            <a href="https://www.instagram.com/anton.ort03/" target="_blank" rel="noopener noreferrer">
              <StaticImage className="w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/instagram.png">
              </StaticImage>
            </a>
            <a href="https://www.instagram.com/anton.ort03/" target="_blank" rel="noopener noreferrer">
              <StaticImage className="w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/linkedin.png">
              </StaticImage>
            </a>
            <a href="https://www.instagram.com/anton.ort03/" target="_blank" rel="noopener noreferrer">
              <StaticImage className=" bg-white w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/github.png">
              </StaticImage>
            </a>
          </div>

        </div>
      </aside>
    </section>
  );
}
export default Hero;
