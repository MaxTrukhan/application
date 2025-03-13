import React, { useState, useContext } from "react";
import "../components/layout/main.css";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";
import usePostHook from "../hooks/usePostHook";

const ProjectList = () => {
    const { saveToFavorite, err } = usePostHook();

  const { projects, favorites } = useContext(ProjectContext);

  const navigate = useNavigate();

  return (
    <>
      {err.errPost ? <div>{err.errPost}</div> : ""}
      {err.errDelete ? <div>{err.errDelete}</div> : ""}

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
    </>
  );
};

export default ProjectList;
