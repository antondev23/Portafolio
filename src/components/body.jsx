import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import ImageFloat from "./image-float";
import Services from "./services";
import Proyectos2 from "./proyectos2";
import Proyectos from "./proyectos";
import WhatsAppCTA from "./whatsappCTA";
import Window from "./window";
import SectionHeader from "./section-header";
import Footer from "./footer";

const Body = () => (
  <div className="site-shell">
    <Nav />
    <main>
      <Hero />

      <About />

      <section id="stack" className="section !pt-0" aria-label="Stack tecnológico">
        <div className="page-wrap">
          <ImageFloat />
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="page-wrap">
          <SectionHeader
            index="02"
            label="servicios"
            title={<>Diseño y desarrollo para <span className="accent">ideas que importan</span>.</>}
            lead="Desde la primera línea de código hasta el despliegue: soluciones a medida, rápidas y fáciles de mantener."
          />
          <Services />
        </div>
      </section>

      <section id="proyectos" className="section">
        <div className="page-wrap">
          <SectionHeader
            index="03"
            label="proyectos"
            title="Proyectos recientes."
            lead="Productos web pensados para ser útiles, rápidos y fáciles de usar."
          />
          <Proyectos2 />
        </div>
      </section>

      <section id="experiencia" className="section">
        <div className="page-wrap">
          <SectionHeader index="04" label="experiencia" title="Mi recorrido." />
          <Proyectos />
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="page-wrap">
          <Window title="bash — contacto.sh" meta="zsh" dotColor="var(--accent)" className="mx-auto max-w-4xl">
            <div className="px-6 py-14 text-center md:px-12 md:py-20">
              <p className="mono m-0 text-sm text-[var(--muted)]">
                <span className="prompt">~/<span className="path">antonio</span> $</span>{" "}
                <span className="tok-v">./contacto.sh --nuevo-proyecto</span>
              </p>
              <SectionHeader
                className="mt-8"
                align="center"
                index="05"
                label="contacto"
                title={<>¿Tienes una idea? <span className="accent">Hablemos.</span></>}
                lead="Estoy disponible para colaborar en productos digitales, webs y proyectos con ganas de hacerse realidad."
              />
              <WhatsAppCTA showForm />
            </div>
          </Window>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Body;
