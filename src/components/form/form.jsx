import React, { useState, useContext } from "react";
import "../../pages/project-create/projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ProjectContext } from "../../context/contextProjects";

function Form({ formSubmit, projectId }) {
  const { setFormData, formData} = useContext(ProjectContext);

  const [error, setError] = useState({});

  const handleFormData = (e) => {
    const { name, value } = e.target;
    if (value.length > 250) setError({ [name]: "to long" });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDate = (name, month, day, year) => {
    setFormData({
      ...formData,
      [name]: `${month + 1}/${day}/${year}`,
    });
  };


  return (
    <form className="form" onSubmit={formSubmit}>
      <label className="formElement">
        <span className="formLabel">Project ID</span>
        {projectId ? (
          projectId
        ) : (
          <input
            onChange={(event) => handleFormData(event)}
            value={formData.id}
            name="id"
          />
        )}

        {error.id && <span style={{ marginLeft: "10px" }}>{error.id}</span>}
      </label>

      <label className="formElement">
        <span className="formLabel">Project Name</span>
        <input
          onChange={(event) => handleFormData(event)}
          value={formData.name}
          name="name"
        />
        {error.name && <span style={{ marginLeft: "10px" }}>{error.name}</span>}
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
            handleDate(
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
            handleDate(
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
        {projectId ? "Edit" : "Create"}
      </button>
    </form>
  );
}

export default Form;
