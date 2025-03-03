import React, { useEffect } from "react";
import "../pages/project-create/projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
// import {z} from 'zod'
// import { useForm, Controller  } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const ProjectCreate = ({ formSubmit, setFormData, formData, error }) => {
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
      [name]: `${month + 1}/${day}/${year}`,
    });
    console.log();
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
          {error.id && <span style={{ marginLeft: "10px" }}>{error.id}</span>}
        </label>

        <label className="formElement">
          <span className="formLabel">Project Name</span>
          <input
            onChange={(event) => handleFormData(event)}
            value={formData.name}
            name="name"
          />
          {error.name && (
            <span style={{ marginLeft: "10px" }}>{error.name}</span>
          )}
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
          <input onChange={(event) => handleFormData(event)} name="manager" />
        </label>

        <button type="Submit" className="formBtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProjectCreate;
