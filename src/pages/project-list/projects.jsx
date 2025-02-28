import React, { useEffect, useState } from "react";
import ProjectList from "../../features/projectsList";
import "../main.css";

const Projects = ({
  projects,
  setProjects,
}) => {
  const [err, setErr] = useState({
     errGet: '',
    errPost: '',
    errDelete: ''
});


  useEffect(() => {
    fetch("http://localhost:8003/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        setErr({...err, errGet: error.message})
      });
  }, []);

  return (
    <>
      {err ? <div>{err.errPost}</div> : ""}

      <div className="projects">
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default Projects;
