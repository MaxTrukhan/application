import { useNavigate } from "react-router-dom";
import ProjectList from "./project-list/projectList";
import { useEffect, useState } from "react";
function Main({
  favoriteProjects,
  setFavoriteProjects,
  projects,
  setProjects,
}) {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
      <ProjectList
        projects={projects} // to get acces to projects becouse we need it also at projects deteils
        setProjects={setProjects}
        favoriteProjects={favoriteProjects}
        setFavoriteProjects={setFavoriteProjects} //! Prop Driling
      />
    </div>
  );
}

export default Main;
