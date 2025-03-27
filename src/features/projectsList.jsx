import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";
import usePostHook from "../hooks/usePostHook";
import Loading from "../loading/loading";
import "../components/layout/main.css";
import ProjectEdit from "./projectEdit";

const ProjectList = () => {
  const navigate = useNavigate();
  const { projects, favorites, setProjects } = useContext(ProjectContext);
  const { saveToFavorite } = usePostHook();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("projectsList:", projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8003/projects")
          .then((res) => res.json())
          .then((data) => data.projects);
        setProjects(response);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    
    fetchProjects();
  }, []);

  if (loading) return <Loading />;

  if (error) return error
  
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
