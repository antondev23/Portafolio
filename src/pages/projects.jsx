import React from "react";
import Layout, { PageHeader } from "../components/layout";
import Seo from "../components/seo";
import { ContactPost, ProjectPosts } from "../components/feeds";

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <PageHeader title="Proyectos" subtitle="Productos web útiles, rápidos y fáciles de usar" />
    <ProjectPosts />
    <ContactPost />
  </Layout>
);

export default ProjectsPage;

export const Head = () => <Seo title="Proyectos" description="Selección de proyectos web desarrollados por Antonio Ortega." />;
