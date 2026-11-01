import React from "react";
import imagenes from "../modules/image-float";
import Window from "./window";

/* Stack tecnológico mostrado como la salida de un comando en la terminal. */
const TechChip = ({ img }) => (
  <li className="chip shrink-0 !gap-2.5 !px-3.5 !py-2.5 !text-[.8rem] text-[var(--text)]">
    <img src={img.src} alt="" width={20} height={20} className="h-5 w-5 object-contain" draggable="false" />
    {img.alt}
  </li>
);

const ImageFloat = () => {
  // Duplicamos el array para crear el loop infinito sin saltos
  const items = [...imagenes, ...imagenes];

  return (
    <Window title="bash — stack" meta={`${imagenes.length} paquetes`} dotColor="var(--accent)">
      <div className="terminal-body !pb-3">
        <p className="m-0">
          <span className="prompt">~/<span className="path">antonio</span> $</span> <span className="tok-v">npm ls --stack</span>
        </p>
        <p className="m-0 text-[var(--dim)]">antonio@dev — tecnologías con las que trabajo a diario</p>
      </div>
      <div className="marquee pb-6 pt-2" aria-label="Tecnologías">
        <ul className="marquee-track m-0 list-none p-0 px-4">
          {items.map((img, index) => (
            <TechChip key={`${img.alt}-${index}`} img={img} />
          ))}
        </ul>
      </div>
    </Window>
  );
};

export default ImageFloat;
