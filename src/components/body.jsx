// ...existing code...
import React from "react";
import Hero from "./hero";
import Proyectos from "./proyectos";
import ImageFloat from "./image-float";
import Nav from "./nav";
import Services from "./services";
import Footer from "./footer";
import Proyectos2 from "./proyectos2";
import WhatsAppCTA from "./whatsappCTA";

const Body = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen px-4 md:px-6 py-8 md:py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans w-full overflow-x-hidden" >
            
        <Hero />
        <ImageFloat />
        <h2 className="text-xl md:text-2xl font-semibold mt-8 md:mt-12">Mis Servicios</h2>
        <Services />
        <h2 className="text-xl md:text-2xl font-semibold mt-8 md:mt-12">Mis Proyectos</h2>
        <Proyectos2 />
        <h2 className="text-xl md:text-2xl font-semibold mt-8 md:mt-12">Experiencia</h2>
        <Proyectos />
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-base md:text-lg mb-4">¿Quieres ponerte en contacto conmigo? ¡Genial! 🚀</p>
          <WhatsAppCTA />
        </div>
        <Footer />

      </main>
    </>
  );
};
export default Body;
// ...existing code...
