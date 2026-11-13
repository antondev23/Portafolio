import React from "react";
import { Link } from "gatsby";
import Layout, { PageHeader } from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <PageHeader title="Página no encontrada" subtitle={location?.pathname} />
    <section className="flex flex-col items-center px-8 py-20 text-center">
      <div className="lost-planet" aria-hidden="true">
        <span className="planet-ring" />
      </div>
      <h2 className="mt-12 text-[31px] font-extrabold leading-9">Perdido en el espacio</h2>
      <p className="mt-2 max-w-sm text-[15px] text-[var(--muted)]">
        Esta página no existe o se ha movido a otra órbita. Prueba a volver al inicio.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-accent btn-lg">
          Volver al inicio
        </Link>
        <Link to="/contact/" className="btn btn-outline btn-lg">
          Contactar
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="Página no encontrada" />;
