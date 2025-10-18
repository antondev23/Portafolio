// ...existing code...
import React from "react";
import Hero from "./hero";
import Proyectos from "./proyectos";
import ImageFloat from "./image-float";

const Body = () => {
  return (
    
    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      
        <Hero />
        <ImageFloat />
        <Proyectos />
      
    </main>
  );
};
export default Body;
// ...existing code...