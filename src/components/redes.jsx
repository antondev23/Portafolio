import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Redes = () => {
    return (
        <div className="flex flex-row justify-center gap-3 md:gap-4">
            <a href="https://www.instagram.com/anton.ort03/" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="Instagram" className="w-10 h-10 md:w-10 md:h-10 object-contain rounded-md shadow-sm hover:scale-125 transition-transform duration-200" src="../images/instagram.png" />
            </a>
            <a href="https://linkedin.com/in/antonio-ortega-43b3952b4" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="LinkedIn" className="w-10 h-10 md:w-10 md:h-10 object-contain rounded-md shadow-sm hover:scale-125 transition-transform duration-200" src="../images/linkedin.png" />
            </a>
            <a href="https://github.com/antondev23" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="GitHub" className="bg-white w-10 h-10 md:w-10 md:h-10 object-contain rounded-md shadow-sm hover:scale-125 transition-transform duration-200" src="../images/github.png" />
            </a>
            <a href="https://www.tiktok.com/@antonort23" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="TikTok" className="w-10 h-10 md:w-10 md:h-10 object-contain rounded-md shadow-sm hover:scale-125 transition-transform duration-200" src="../images/tiktok.png" />
            </a>
          </div>
    );
};

export default Redes;
