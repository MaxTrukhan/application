import React, { useState, useContext } from "react";
import "../components/layout/main.css";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";

const ProjectList = () => {
    const { projects, favorites, setFavorites } = useContext(ProjectContext);
  const navigate = useNavigate();

  const [err, setErr] = useState({
    errGet: "",
    errPost: "",
    errDelete: "",
  });

  
  const markSaveProject = async (id) => {
    const savedProject = projects.find((project) => project.id === id);

    if (favorites.find((favorite) => favorite.id === id)) {
      try {
        await fetch("http://localhost:8003/projects/favorite", {
          method: "DELETE",
          body: JSON.stringify({ id: savedProject.id }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setFavorites(favorites.filter((favorite) => favorite.id !== id));
          } else {
            throw new Error(`Can't delete ${id}`);
          }
        });
      } catch (error) {
        setErr({ ...err, errDelete: error.message });
      } finally {
        setTimeout(() => {
          setErr({ ...err, errDelete: "" });
        }, 7000);
      }
    } else {
      try {
        await fetch("http://localhost:8003/projects/favorite", {
          method: "POST",
          body: JSON.stringify(savedProject),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setFavorites((prevProjects) => [...prevProjects, savedProject]);
          } else {
            throw new Error("Something went wrong");
          }
        });
      } catch (error) {
        setErr({ ...err, errPost: error.message });
      } finally {
        setTimeout(() => {
          setErr({ ...err, errPost: "" });
        }, 7000);
      }
    }
  };

  return (
    <>
      {err ? <div>{err.errPost}</div> : ""}

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
                        onClick={() => markSaveProject(project.id)}
                        className={`save__project-btn ${
                          favorites.find(
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

export default ProjectList;
