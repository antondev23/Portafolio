import React from "react";
import Nav from "../components/nav";
import Proyectos2 from "../components/proyectos2";
import Footer from "../components/footer";
import SectionHeader from "../components/section-header";
import Seo from "../components/seo";

const ProjectsPage = () => (
  <div className="site-shell">
    <Nav />
    <main className="page-wrap content-page">
      <div className="content-intro">
        <SectionHeader
          as="h1"
          label="proyectos"
          title={<>Proyectos que <span className="accent">resuelven problemas</span>.</>}
          lead="Productos web pensados para ser útiles, rápidos y fáciles de usar."
        />
      </div>
      <Proyectos2 />
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;

export const Head = () => <Seo title="Proyectos" description="Selección de proyectos web desarrollados por Antonio Ortega." />;
