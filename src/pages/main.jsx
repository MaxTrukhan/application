import React from "react";
import "./main.css";
import { useState } from "react";
import Aside from "../Project/aside";
// import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { projects } from "../Project/data/Projects";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  console.log(projects[0])

  const saveProject = (id) => {
    const chosenProject = projects.find(project => project.id == id)
    const indexProject = id - 1
    
    projects.splice(indexProject, 1, {
      ...chosenProject,
      saved: !chosenProject.saved,
    });
  }

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
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
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              console.log(project);
              return (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>{project.manager}</td>
                  <td>{`${project.saved}`}</td>
                  <td>
                    <button
                      onClick={() => saveProject(project.id)}
                      className="save__project-btn"
                    >
                      {project.saved ? (
                        <AiFillStar className="save__project" />
                      ) : (
                        <CiStar className="save__project" />
                      )}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/projects/${project.id}/edit`)}
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
    </div>
  );
  
}

export default Main;
