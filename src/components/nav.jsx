import { Link } from "gatsby";
import React from "react";
import ThemeSwitch from "./themeSwitch";


const Nav = () => {
    return (
        <nav className="flex items-center justify-between ">
            <div className="flex-shrink-0">
                {/* Logo placeholder */}
                <div className="flex items-center gap-3">
                    <a href="./"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#037CEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" /><path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" /></g></svg></a>
                    <span className="font-semibold">Antonio Ortega</span>
                </div>

            </div>
            <ul className="flex p-4 space-x-8 flex-1 justify-center">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/service">Servicios</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/experiencia">Experiencia</Link></li>
            </ul>
            <div className="flex flex-shrink-0 items-center gap-4">
                <ul>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <ThemeSwitch />
            </div>
        </nav>
    );
}
export default Nav;
