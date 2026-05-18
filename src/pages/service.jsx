import React from 'react';
import Nav from '../components/nav';
import Services from '../components/services';
import Footer from '../components/footer';


const ServicePage = () => {
    return (
        <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Nav/>
            <div className="container mx-auto px-4 py-8">
                <Services />
                <p className="text-lg mb-6">Aquí puedes describir los servicios que ofreces, tus habilidades y cómo puedes ayudar a tus clientes.</p>
                <ul className="list-disc list-inside mb-6"> 
                    <li>Desarrollo web personalizado</li>
                    <li>Consultoría en tecnología</li>
                    <li>Creación de contenido técnico</li>
                    <li>Soporte y mantenimiento de proyectos</li>
                </ul>
                <p className="text-lg">Si estás interesado en contratar mis servicios o tienes alguna pregunta, no dudes en <a href="#" className="text-blue-500 hover:underline">contactarme</a>.</p>
            </div>

            <Footer />
            
        </main>

    );
}
export default ServicePage;