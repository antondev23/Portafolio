import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const ContactPage = () => {
    return (
        <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Nav />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-6">Contacto</h1>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
                        <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Correo Electrónico</label>
                        <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" type="email" id="email" name="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
                        <textarea className="w-full px-3 py-2 border border-dashed focus:outline-none focus:ring focus:border-blue-300" id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 shadow-lg shadow-blue-500/50 rounded-md hover:bg-blue-600 transition-colors duration-200" type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </main>
    );
};

export default ContactPage;