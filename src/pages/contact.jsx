import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import WhatsAppCTA from "../components/whatsappCTA";
import Formulario from "../components/formulario";
import SectionHeader from "../components/section-header";
import Seo from "../components/seo";

const ContactPage = () => (
  <div className="site-shell">
    <Nav />
    <main className="page-wrap content-page">
      <div className="content-intro">
        <SectionHeader
          as="h1"
          align="center"
          label="contacto"
          title={<>Construyamos <span className="accent">algo bueno</span>.</>}
          lead="Cuéntame tu idea, objetivo o problema. Encontraremos la mejor forma de abordarlo."
        />
      </div>
      <Formulario />
      <div className="mt-16 border-t border-[var(--line)] py-16 text-center">
        <p className="mono m-0 text-sm text-[var(--muted)]">¿Prefieres algo más directo?</p>
        <WhatsAppCTA />
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactPage;

export const Head = () => <Seo title="Contacto" description="Escríbeme para hablar de tu próximo proyecto web o de software." />;
