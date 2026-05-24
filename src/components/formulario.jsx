import React from "react";

const Formulario = () => {
    return (
        <>
        <form className="max-w-lg mx-auto mb-0 mt-6 md:mt-8 bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-xs md:text-sm font-medium mb-2" htmlFor="name">Nombre</label>
                <input className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
                <label className="block text-xs md:text-sm font-medium mb-2" htmlFor="email">Correo Electrónico</label>
                <input className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-300" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
                <label className="block text-xs md:text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
                <textarea className="w-full px-3 py-2 text-sm border border-dashed focus:outline-none focus:ring focus:border-blue-300" id="message" name="message" rows={5} required></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 text-sm md:text-base shadow-lg shadow-blue-500/50 rounded-md hover:bg-blue-600 transition-colors duration-200" type="submit">Enviar</button>
        </form>
        
        </>
    )
}

export default Formulario;

