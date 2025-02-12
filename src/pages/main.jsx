import React from "react";
import "./main.css";
import { useState } from "react";
import Aside from "../Project/aside";
// import { FaHeart } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { projects } from "../components/Form/data/Projects";
import { favoriteProject } from "../components/Form/data/FavoriteProject";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const saveProject = (id, index) => {
    const savedProject = projects.find((project) => project.id === id);
    // console.log(savedProject["saved"] = true);
    // projects[index] = savedProject["saved"] = true;
    favoriteProject.map((favorite) =>
      favorite.id !== id ? favoriteProject.push(savedProject) : ""
    );
  };

  const fetchProjects = () => {
    
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
              <th />
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>{project.manager}</td>
                  <td>
                    <button
                      onClick={() => saveProject(project.id, index)}
                      className="save__project-btn star"
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
    </div>
  );
}

export default Main;
