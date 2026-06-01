import React from "react";
import Redes from "./redes";

const Footer = () => {
    return (
        <footer className="text-center  mt-12">
            <p className="text-sm text-gray-500">
                &copy; 2026 Mi Portfolio - Antonio Ortega. Todos los derechos reservados.
            </p>
            <Redes />

        </footer>
    );
}

export default Footer;