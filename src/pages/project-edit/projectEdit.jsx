import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../project-create/projectCreate.css";
import { useNavigate, useParams } from "react-router-dom";

const ProjectEdit = ({ projects, setProjects }) => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;

  const [updated, setUpdated] = useState({
    name: "",
    startDate: null,
    endDate: null,
    description: "",
    manager: "",
  });

  const updating = (e) => {
    const { name, value } = e.target;
    setUpdated({
      ...updated,
      [name]: value,
    });
  };
  const updatingDate = (name, date) => {
    setUpdated({
      ...updated,
      [name]: date,
    });
  };
    console.log(updated, 'updated ');
  const update = (id) => {
    fetch("/projects", {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        setProjects(projects.map(project => project.id == id ? updated : project))
      })
  };
  console.log(projects, "projects at edit");

  return (
    <div>
      <form className="formCreate" onSubmit={() => update(projectId)}>
        <label className="formElement">
          <span className="formLabel">Project ID</span>
          <span>{projectId}</span>
        </label>

        <label className="formElement">
          <span className="formLabel">Project Name</span>
          <input
            onChange={(event) => updating(event)}
            value={updated.name}
            name="name"
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Description</span>
          <textarea
            onChange={(event) => updating(event)}
            value={updated.description}
            name="description"
            rows="10"
            cols="50"
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Start Date</span>
          <DatePicker
            onChange={(date) => updatingDate("startDate", date)}
            selected={updated.startDate}
          />
        </label>

        <label className="formElement">
          <span className="formLabel">End Date</span>
          <DatePicker
            onChange={(date) => updatingDate("endDate", date)}
            selected={updated.endDate}
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Project Manager</span>
          <input
            onChange={(event) => updating(event)}
            value={updated.manager}
            name="manager"
          />
        </label>

        <button type="submit" className="formBtn">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProjectEdit;
