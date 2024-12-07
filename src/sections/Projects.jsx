import React from "react";
import { projectJson } from "../constants/index";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h1 className="head-text mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
