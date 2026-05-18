// ...existing code...
import React from "react";
import Hero from "./hero";
import Proyectos from "./proyectos";
import ImageFloat from "./image-float";
import Nav from "./nav";
import Services from "./services";
import Footer from "./footer";
import Proyectos2 from "./proyectos2";

const Body = () => {
  return (

    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans" >
          
      <Nav />
      <Hero />
      <ImageFloat />
      <Services />
      <Proyectos2 />
      <Proyectos />
      <Footer />

    </main>
  );
};
export default Body;
// ...existing code...
