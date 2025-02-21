import React, { useEffect } from "react";
import "./projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
// import {z} from 'zod'
// import { useForm, Controller  } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const ProjectCreate = ({ setProjects, projects }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    startDate: null, // Initially no date selected
    endDate: null, // Initially no date selected
    manager: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleData = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };
  
  const [error, setError] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (projects.find((project) => project.id == formData.id)) {
      setError(`Next valid ID is ${projects.length}`);
    } else {
      fetch("http://localhost:8003/projects", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setProjects([...projects, formData]);
      });
      navigate("/projects");
    }
  };
  return (
    <div className="new">
      <form className="formCreate" onSubmit={formSubmit}>
        <label className="formElement">
          <span className="formLabel">Project ID</span>
          <input
            onChange={(event) => handleFormData(event)}
            value={formData.id}
            name="id"
            required
          />
          {error && <span style={{ marginLeft: "10px" }}>{error}</span>}
        </label>

        <label className="formElement">
          <span className="formLabel">Project Name</span>
          <input
            onChange={(event) => handleFormData(event)}
            value={formData.name}
            name="name"
            required
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Description</span>
          <textarea
            onChange={(event) => handleFormData(event)}
            name="description"
            rows="10"
            cols="50"
            required
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Start Date</span>
          <DatePicker
            onChange={(date) => handleData("startDate", date)}
            selected={formData.startDate}
            required
          />
        </label>

        <label className="formElement">
          <span className="formLabel">End Date</span>
          <DatePicker
            onChange={(date) => handleData("endDate", date)}
            selected={formData.endDate}
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Project Manager</span>
          <input
            onChange={(event) => handleFormData(event)}
            name="manager"
            required
          />
        </label>

        <button type="Submit" className="formBtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProjectCreate;
