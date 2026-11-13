import React from "react";
import Layout, { PageHeader } from "../components/layout";
import Seo from "../components/seo";
import { ContactPost, ServicePosts, ServicesPoll } from "../components/feeds";

const ServicePage = ({ location }) => (
  <Layout location={location}>
    <PageHeader title="Servicios" subtitle="Lo que puedo construir contigo" />
    <ServicesPoll />
    <ServicePosts />
    <ContactPost />
  </Layout>
);

export default ServicePage;

export const Head = () => <Seo title="Servicios" description="Desarrollo web, desarrollo de software y landing pages a medida." />;
