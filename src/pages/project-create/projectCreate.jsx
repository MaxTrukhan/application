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
    id: Number,
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

  const handleData = (name, month, day, year) => {
    setFormData({
      ...formData,
      [name]: `${month}/${day}/${year}`,
    });
  };

  const [error, setError] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (projects.find((project) => project.id == formData.id)) {
      setError(`Next valid ID is ${projects.length + 1}`);
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
            
          />
          {error && <span style={{ marginLeft: "10px" }}>{error}</span>}
        </label>

        <label className="formElement">
          <span className="formLabel">Project Name</span>
          <input
            onChange={(event) => handleFormData(event)}
            value={formData.name}
            name="name"
            
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Description</span>
          <textarea
            onChange={(event) => handleFormData(event)}
            name="description"
            rows="10"
            cols="50"
            
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Start Date</span>
          <DatePicker
            onChange={(date) =>
              handleData(
                "startDate",
                date.getMonth(),
                date.getDate(),
                date.getFullYear()
              )
            }
            selected={formData.startDate}
            
          />
        </label>

        <label className="formElement">
          <span className="formLabel">End Date</span>
          <DatePicker
            onChange={(date) =>
              handleData(
                "endDate",
                date.getMonth(),
                date.getDate(),
                date.getFullYear()
              )
            }
            selected={formData.endDate}
          />
        </label>

        <label className="formElement">
          <span className="formLabel">Project Manager</span>
          <input
            onChange={(event) => handleFormData(event)}
            name="manager"
            
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
