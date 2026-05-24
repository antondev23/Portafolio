import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import WhatsAppCTA from "../components/whatsappCTA";
import Formulario from "../components/formulario";

const ContactPage = () => {
    return (
        <>
            <Nav />
            <main className="min-h-screen px-4 md:px-6 py-8 md:py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans w-full overflow-x-hidden">
                <div className="container mx-auto">
                    <div className="text2 text-center">
                        <p className="mt-6 md:mt-8 text-xl md:text-2xl">¿Quieres ponerte en contacto conmigo? ¡Genial! 🚀</p>
                        <p className="text-red-400 text-sm md:text-base mt-2">Estoy listo para escuchar tus ideas, responder tus preguntas o simplemente charlar sobre tecnología. ¡Hablemos!</p>
                        <Formulario />
                    </div>
                    
                </div>
                <div className="text-center mt-8 md:mt-12 px-4">
                    <p className="text-base md:text-lg mb-4">¿Prefieres algo más directo? ¡Sin problema! 📱</p>
                    <WhatsAppCTA />
                </div>

                <Footer />
            </main>
        </>
    );
};

export default ContactPage;