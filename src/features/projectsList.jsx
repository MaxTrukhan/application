import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";
import usePostHook from "../hooks/usePostHook";
import Loading from "../loading/loading";
import "../components/layout/main.css";


const ProjectList = () => {
  const navigate = useNavigate();
  const { projects, favorites, loading } = useContext(ProjectContext);
  const { saveToFavorite } = usePostHook();
 

  if (loading) return <Loading />;

  return (
    
      <div className="projects">
        <table>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Project Manager</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>
                    <button
                      className="name___btn"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      {project.name}
                    </button>
                  </td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>{project.manager}</td>
                  <td>
                    <button
                      onClick={() => saveToFavorite(project.id)}
                      className={`save__project-btn ${
                        favorites.find((favorite) => favorite.id === project.id)
                          ? "savedStar"
                          : "star"
                      }`}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/projects/${project.id}/edit`);
                      }}
                      className="Edit"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};

export default ProjectList;
