import React from "react";
import "./main.css";
import { useState } from "react";
import Aside from "../Project/aside";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { projects } from "../Project/data/Projects";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Main() {
const navigate = useNavigate();

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate('/projects/new')} className="createBtn">Create Project</button>
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
              return (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate}</td>
                  <td>{project.manager}</td>
                  <td>
                    <button onClick={() => navigate(`${project.id}`)} className="Edit">Edit</button>
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
