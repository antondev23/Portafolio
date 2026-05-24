import React from "react";
import imagenes from "../modules/image-float";

const ImageFloat = () => {
  // Duplicamos el array para crear el loop infinito sin saltos
  const items = [...imagenes, ...imagenes];

  return (
    <div
      className="max-w-6xl mx-auto overflow-hidden relative"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className="flex items-center h-20 md:h-28">
        <div
          className="flex items-center gap-8 md:gap-12 shrink-0"
          style={{
            animation: "marquee 20s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((img, index) => (
            <div
              key={index}
              className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain w-full h-full"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ImageFloat;