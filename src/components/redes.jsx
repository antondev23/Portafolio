import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Redes = () => {
    return (
        <>
        
        <div className="container-fluid flex flex-row justify-center gap-4">
            <a href="https://www.instagram.com/anton.ort03/" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="Instagram" className="w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/instagram.png">
              </StaticImage>
            </a>
            <a href="https://linkedin.com/in/antonio-ortega-43b3952b4" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="LinkedIn" className="w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/linkedin.png">
              </StaticImage>
            </a>
            <a href="https://github.com/antondev23" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="GitHub" className=" bg-white w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/github.png">
              </StaticImage>
            </a>
            <a href="https://www.tiktok.com/@antonort23" target="_blank" rel="noopener noreferrer">
              <StaticImage alt="TikTok" className="w-4 h-4 md:w-8 md:h-8 object-contain rounded-md shadow-sm hover:scale-115 transition-transform duration-200 mt-5" src="../images/tiktok.png">
              </StaticImage>
            </a>
          </div>
        </>
    );
};

export default Redes;
