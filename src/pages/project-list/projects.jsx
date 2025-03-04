import React, { useEffect, useState } from "react";
import ProjectList from "../../features/projectsList";
import "../../components/layout/main.css";
import ProjectsCreateBtn from "./components/projectsCreateBtn";

const Projects = ({ setProjects, projects, favoriteProjects, setFavoriteProjects }) => {
  const [err, setErr] = useState({
    errGet: "",
    errPost: "",
    errDelete: "",
  });

  useEffect(() => {
    fetch("http://localhost:8003/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        setErr({ ...err, errGet: error.message });
      });
  }, []);

  return (
    <>
      {err ? <div>{err.errPost}</div> : ""}

      <div className="projects">
        <ProjectsCreateBtn/>
        <ProjectList
          projects={projects}
          favoriteProjects={favoriteProjects}
          setFavoriteProjects={setFavoriteProjects}
        />
      </div>
    </>
  );
};

export default Projects;
