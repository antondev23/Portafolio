import React from "react";
import { StaticImage } from "gatsby-plugin-image";

/**
 * Foto de perfil circular. El tamaño lo marca `className` (p. ej. "h-10 w-10").
 * La foto original es vertical, así que se recorta y centra en la cara desde CSS (.avatar img).
 */
const Avatar = ({ className = "h-10 w-10", ring = false }) => (
  <span className={`avatar ${ring ? "avatar-ring" : ""} ${className}`}>
    <StaticImage
      src="../images/perfil.webp"
      alt="Antonio Ortega"
      width={400}
      quality={85}
      placeholder="blurred"
      formats={["auto", "webp"]}
      className="h-full w-full"
      imgStyle={{ objectPosition: "50% 64%" }}
    />
  </span>
);

export default Avatar;
