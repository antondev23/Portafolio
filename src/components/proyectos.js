import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Proyectos = () => {
  {/* Proyectos: contenedor debajo */ }
  return (
    <section className="max-w-6xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ejemplo de tarjeta de proyecto - duplica/añade según necesites */}
        <article className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4">
            <StaticImage
              src="../images/dreamconnect.png"
              alt="Imagen del Proyecto 1"
              className="w-full h-full object-cover rounded-md">

            </StaticImage>
          </div>
          <h3 className="text-lg font-medium">Proyecto 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Descripción breve del proyecto.</p>
        </article>

        <article className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4" />
          <h3 className="text-lg font-medium">Proyecto 2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Descripción breve del proyecto.</p>
        </article>

        {/* Añade más tarjetas aquí */}
      </div>
    </section>
  )
}

export default Proyectos;