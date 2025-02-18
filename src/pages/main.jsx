import { useNavigate } from "react-router-dom";
import ProjectList from "./project-list/projectList";
import { useEffect, useState } from "react";
function Main({ favoriteProjects, setFavoriteProjects, project }) {
  const navigate = useNavigate()

  return (
 
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
      <ProjectList
        project={project}
        favoriteProjects={favoriteProjects}
        setFavoriteProjects={setFavoriteProjects} //! Prop Driling
      />
    </div>
  );
}

export default Main;
