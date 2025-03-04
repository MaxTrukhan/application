import React from "react";
import "../../pages/project-create/projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function CreateForm({ formSubmit, handleFormData, formData, error, handleData }) {
  return (
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
  );
}

export default CreateForm;
