import React from "react";
import Nav from "../components/nav";
import Proyectos from "../components/proyectos";
import Footer from "../components/footer";
import SectionHeader from "../components/section-header";
import Seo from "../components/seo";

const ExperienciaPage = () => (
  <div className="site-shell">
    <Nav />
    <main className="page-wrap content-page">
      <div className="content-intro">
        <SectionHeader as="h1" label="experiencia" title={<>Experiencia que <span className="accent">suma</span>.</>} />
      </div>
      <Proyectos />
    </main>
    <Footer />
  </div>
);

export default ExperienciaPage;

export const Head = () => <Seo title="Experiencia" description="Recorrido profesional de Antonio Ortega como desarrollador." />;
