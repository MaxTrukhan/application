import React, { useEffect } from "react";
import "../main.css";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ favoriteProjects, setFavoriteProjects, project }) => {
  const navigate = useNavigate();
  console.log(project)
  const markSaveProject = (id) => {
    const savedProject = [].find((project) => project.id === id); // defind which porject we clicked on

    favoriteProjects.find((favorite) => favorite.id === id)
      ? setFavoriteProjects(
          favoriteProjects.filter((favorite) => favorite.id !== id)
        )
      : setFavoriteProjects([...favoriteProjects, savedProject]);
  };

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
      {project.length > 0 && (
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
              {[].map((project, index) => {
                return (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>{project.manager}</td>
                    <td>
                      <button
                        onClick={() => markSaveProject(project.id)}
                        className={`save__project-btn ${
                          favoriteProjects.find(
                            (favorite) => favorite.id === project.id
                          )
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
      )}
    </div>
  );
};

export default ProjectList
