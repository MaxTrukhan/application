import React from "react";
import ProjectList from "../../features/projectsList";
import "../../components/layout/main.css";
import ProjectsCreateBtn from "./components/projectsCreateBtn";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectsCreateBtn />
      <ProjectList />
    </div>
  );
};

export default Projects;
