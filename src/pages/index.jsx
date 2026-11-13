import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout, { PageHeader } from "../components/layout";
import ProfileHeader from "../components/profile-header";
import Seo from "../components/seo";
import {
  AboutPost,
  ContactPost,
  ExperienceThread,
  ProjectPosts,
  ServicePosts,
  ServicesPoll,
  StackPost,
} from "../components/feeds";

const TABS = [
  { id: "posts", label: "Posts" },
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "stack", label: "Stack" },
];

const FEEDS = {
  posts: () => (
    <>
      <AboutPost />
      <ProjectPosts />
      <StackPost />
      <ServicesPoll />
      <ExperienceThread />
      <ContactPost />
    </>
  ),
  proyectos: () => <ProjectPosts />,
  servicios: () => (
    <>
      <ServicesPoll />
      <ServicePosts />
    </>
  ),
  experiencia: () => <ExperienceThread />,
  stack: () => <StackPost />,
};

/* Pestañas del perfil. La pestaña activa se guarda en ?tab= para poder compartir el enlace. */
const ProfileTabs = ({ active, onChange }) => (
  <div className="profile-tabs" role="tablist" aria-label="Contenido del perfil">
    {TABS.map((tab) => (
      <button
        key={tab.id}
        type="button"
        role="tab"
        id={`tab-${tab.id}`}
        aria-selected={active === tab.id}
        aria-controls="panel-perfil"
        className={`tab ${active === tab.id ? "is-active" : ""}`}
        onClick={() => onChange(tab.id)}
      >
        <span className="relative inline-flex h-full items-center">
          {tab.label}
          {active === tab.id && <motion.span layoutId="tab-indicator" className="tab-indicator" transition={{ type: "spring", stiffness: 500, damping: 40 }} />}
        </span>
      </button>
    ))}
  </div>
);

const IndexPage = ({ location }) => {
  const [tab, setTab] = useState("posts");

  useEffect(() => {
    const requested = new URLSearchParams(location.search).get("tab");
    if (requested && FEEDS[requested]) setTab(requested);
  }, [location.search]);

  const changeTab = (id) => {
    setTab(id);
    const url = id === "posts" ? location.pathname : `${location.pathname}?tab=${id}`;
    window.history.replaceState(null, "", url);
  };

  const Feed = FEEDS[tab];

  return (
    <Layout location={location}>
      <PageHeader back={false} title="Antonio Ortega" subtitle="Desarrollador de web · Terrassa" />
      <ProfileHeader />
      <ProfileTabs active={tab} onChange={changeTab} />
      <div id="panel-perfil" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        <Feed />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
