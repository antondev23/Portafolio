import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import ThemeSwitch from "./themeSwitch";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // 1. Cierra el menú si se redimensiona a desktop (evita menú atascado)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) closeMenu();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 2. Bloquea el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <nav className="relative flex items-center justify-between px-4 py-3 md:px-8 md:py-4 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
            
            {/* Logo — usando Link en vez de <a> para navegación interna en Gatsby */}
            <div className="flex-shrink-0">
                <Link to="/" className="flex items-center gap-2 md:gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" className="md:w-12 md:h-12">
                        <g fill="none" stroke="#037CEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                            <path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" />
                            <path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" />
                        </g>
                    </svg>
                    <span className="font-semibold text-sm md:text-base">Antonio Ortega</span>
                </Link>
            </div>

            {/* Navegación desktop */}
            <ul className="hidden md:flex space-x-8 flex-1 justify-center text-sm md:text-base">
                {[
                    { to: "/", label: "Inicio" },
                    { to: "/service", label: "Servicios" },
                    { to: "/projects", label: "Proyectos" },
                    { to: "/experiencia", label: "Experiencia" },
                ].map(({ to, label }) => (
                    // 3. activeClassName resalta el link de la página actual
                    <li key={to}>
                        <Link
                            to={to}
                            className="hover:text-blue-500 transition-colors duration-200"
                            activeClassName="text-blue-500 font-medium"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop — Contacto + ThemeSwitch */}
            <div className="hidden md:flex flex-shrink-0 items-center gap-4">
                <Link
                    to="/contact"
                    className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base"
                    activeClassName="text-blue-500 font-medium"
                >
                    Contacto
                </Link>
                <ThemeSwitch />
            </div>

            {/* Mobile — ThemeSwitch + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
                <ThemeSwitch />

                {/* 4. aria-expanded comunica el estado al lector de pantalla */}
                <button
                    onClick={toggleMenu}
                    className="flex flex-col gap-1.5 p-1"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className={`h-0.5 w-6 bg-current rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-6 bg-current rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-current rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Menú móvil — con animación de entrada */}
            <div className={`
                absolute top-full left-0 right-0 w-full
                bg-white dark:bg-gray-900
                border-b border-gray-200 dark:border-gray-700
                md:hidden z-50
                transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}>
                <ul className="flex flex-col p-4 space-y-4 text-sm">
                    {[
                        { to: "/", label: "Inicio" },
                        { to: "/service", label: "Servicios" },
                        { to: "/projects", label: "Proyectos" },
                        { to: "/experiencia", label: "Experiencia" },
                        { to: "/contact", label: "Contacto" },
                    ].map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                onClick={closeMenu}
                                className="block hover:text-blue-500 transition-colors duration-200"
                                activeClassName="text-blue-500 font-medium"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;