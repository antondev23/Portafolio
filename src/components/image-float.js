
import React from "react";
import imagenes from "../modules/image-float";

const ImageFloat = () => {
  const duration = 24; // segundos (ajusta velocidad)
  const imgSize = "5rem"; // tamaño de la caja de cada imagen (ajusta)
  // también puedes usar "5rem" en móvil y "6rem" en desktop con media queries abajo

  return (
    <div className="max-w-6xl mx-auto overflow-hidden relative h-24 md:h-36 mt-12">
      <div className="w-full h-full relative">
        {imagenes.map((img, index) => {
          const delay = -((index * duration) / imagenes.length); // espacio temporal entre imágenes
          return (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg shadow-lg"
              style={{
                // caja fija para cada logo
                width: "var(--img-w)",
                height: "var(--img-h)",
                // variables utilizadas en las keyframes
                ["--img-w"]: imgSize,
                ["--img-h"]: imgSize,
                // animación
                animationName: "slide",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                willChange: "transform"
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain w-4/5 h-4/5"
                draggable="false"
              />
            </div>
          );
        })}
      </div>

      <style>{`
        /* mueve cada caja desde fuera derecha hasta fuera izquierda */
        @keyframes slide {
          0% {
            transform: translateX(calc(100vw + var(--img-w))) translateY(-50%);
          }
          100% {
            transform: translateX(calc(-1 * var(--img-w))) translateY(-50%);
          }
        }

        /* responsive: cajas más pequeñas en móvil */
        @media (max-width: 640px) {
          div[style] {
            --img-w: 4.5rem;
            --img-h: 4.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageFloat;
// ...existing code...