import React from "react";
import Nav from "../components/nav";
import Services from "../components/services";
import Footer from "../components/footer";
import WhatsAppCTA from "../components/whatsappCTA";
import SectionHeader from "../components/section-header";
import Seo from "../components/seo";

const ServicePage = () => (
  <div className="site-shell">
    <Nav />
    <main className="page-wrap content-page">
      <div className="content-intro">
        <SectionHeader
          as="h1"
          label="servicios"
          title={<>Lo que puedo <span className="accent">construir contigo</span>.</>}
          lead="Desde la primera línea de código hasta el despliegue: soluciones a medida, rápidas y fáciles de mantener."
        />
      </div>
      <Services />
      <div className="mt-20 border-t border-[var(--line)] py-20 text-center">
        <h2 className="section-heading">¿Tienes un reto?</h2>
        <WhatsAppCTA showForm />
      </div>
    </main>
    <Footer />
  </div>
);

export default ServicePage;

export const Head = () => <Seo title="Servicios" description="Desarrollo web, desarrollo de software y landing pages a medida." />;
