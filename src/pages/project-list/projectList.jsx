import React, { useEffect, useState } from "react";
import "../main.css";
import { useNavigate } from "react-router-dom";
  // export let chosenId 
  // const sendChosenId = (id) => {
  //     chosenId = id
  // }

const ProjectList = ({
  favoriteProjects,
  setFavoriteProjects,
  projects,
  setProjects,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8003/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  const markSaveProject = (id) => {
    const savedProject = projects.find((project) => project.id === id);

    favoriteProjects.find((favorite) => favorite.id === id)
      ? fetch("http://localhost:8003/projects/favorite", {
          method: "DELETE",
          body: JSON.stringify({ id: savedProject.id }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) =>
          setFavoriteProjects(
            favoriteProjects.filter((favorite) => favorite.id !== id)
          )
        )
      : fetch("http://localhost:8003/projects/favorite", {
          method: "POST",
          body: JSON.stringify(savedProject),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) =>
          setFavoriteProjects((prevProjects) => [...prevProjects, savedProject])
        );
  };
  console.log(projects);
  return (
    <>
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
            {projects
              .sort((a, b) => a.id - b.id)
              .map((project) => {
                return (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>
                      <button>{project.name}</button>
                    </td>
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
    </>
  );
};

export default ProjectList
