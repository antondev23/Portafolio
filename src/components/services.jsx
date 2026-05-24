import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  // 1. Estado para guardar los servicios y manejar carga/errores
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeServiceId, setActiveServiceId] = useState(null);

  // 2. Al montar el componente, consulta la API
  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los servicios");
        setLoading(false);
      });
  }, []); // [] = solo se ejecuta una vez al montar

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleDescription = (serviceId) => {
    setActiveServiceId((currentId) =>
      currentId === serviceId ? null : serviceId
    );
  };

  const getServiceImage = (service) =>
    service.image || service.imageUrl || service.backgroundImage;

  if (loading) return <p className="text-center py-8">Cargando servicios...</p>;
  if (error)   return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 3. Itera los datos dinámicos en lugar de JSX fijo */}
        {services.map((service, index) => {
          const serviceImage = getServiceImage(service);

          return (
            <motion.div
              key={service.id}
              className="relative min-h-40 md:min-h-48 cursor-pointer overflow-hidden rounded-lg bg-gray-900 bg-cover bg-center p-4 md:p-6 shadow-md"
              style={
                serviceImage
                  ? { backgroundImage: `url(${serviceImage})` }
                  : undefined
              }
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              onClick={() => toggleDescription(service.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleDescription(service.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={activeServiceId === service.id}
            >
              <div className="absolute inset-0 bg-black/35" />
              <h3 className="relative z-10 text-xl font-medium text-white">
                {service.title}
              </h3>
              {activeServiceId === service.id && (
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/45 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-center text-white">{service.description}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
