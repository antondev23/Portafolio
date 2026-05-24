import React from "react";
import Nav from "../components/nav";
import Proyectos from "../components/proyectos";
import Proyectos2 from "../components/proyectos2";
import Footer from "../components/footer";

const ProjectsPage = () => {
    return (
        <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Nav />
            <div className="container mx-auto">
                <Proyectos2 />
            </div>
            <Footer />
        </main>
    );
}

export default ProjectsPage;