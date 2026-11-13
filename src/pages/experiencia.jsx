import React from "react";
import Layout, { PageHeader } from "../components/layout";
import Seo from "../components/seo";
import { ContactPost, ExperienceThread } from "../components/feeds";

const ExperienciaPage = ({ location }) => (
  <Layout location={location}>
    <PageHeader title="Experiencia" subtitle="Mi recorrido, en un hilo" />
    <ExperienceThread />
    <ContactPost />
  </Layout>
);

export default ExperienciaPage;

export const Head = () => <Seo title="Experiencia" description="Recorrido profesional de Antonio Ortega como desarrollador." />;
