import React from "react";
import Nav from "../components/nav";
import Proyectos from "../components/proyectos";
import Footer from "../components/footer";

const ExperienciaPage = () => { 
    return (
        <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Nav />
            <div className="container mx-auto">
                <div className="text2 text-center">
                    <p className="text-2xl">Mi viaje profesional: Experiencia que impulsa mi pasión 🚀</p>
                    <p className="text-red-400 text-2xl">¿Quieres conocer mi historia?</p>
                </div>
                <Proyectos />
            </div>
            <Footer />
        </main>
    );
}
export default ExperienciaPage;