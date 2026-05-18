import React from 'react';
import Nav from '../components/nav';
import Services from '../components/services';
import Footer from '../components/footer';
import WhatsAppCTA from '../components/whatsappCTA';
import ScrollIndicator from '../components/scrollIndicador';


const ServicePage = () => {
    return (
        <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Nav />
            <div className="container mx-auto  ">
                <Services />
                <div className="text2 text-center">
                    <p className="text-4xl mb-6">Tengo las manos listas 🤙 y las ideas en llamas 🔥</p>
                    <p className="text-red-400  text-4xl mb-4">¿Tienes un reto para mí?</p>
                </div>

                <p className="text-xl max-w-3xl mx-auto text-center">No me conformo con lo genérico. Me obsesionan los proyectos que asustan un poco, los que tienen algo que decir. Si tienes una idea rara, una visión ambiciosa o un problema sin resolver — ese es exactamente mi lugar. Aquí tienes lo que puedo hacer por ti</p>

                <ScrollIndicator />

                <WhatsAppCTA  />
            </div>

            <Footer />

        </main>

    );
}
export default ServicePage;
