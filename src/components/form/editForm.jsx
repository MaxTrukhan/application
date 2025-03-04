import React from 'react'
import DatePicker from "react-datepicker";


function EditForm({ updating, updatingDate, update, projectId, updated }) {
  return (
    <form className="formCreate" onSubmit={() => update()}>
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
          onChange={(date) =>
            updatingDate(
              "startDate",
              date.getMonth(),
              date.getDate(),
              date.getFullYear()
            )
          }
          selected={updated.startDate}
        />
      </label>

      <label className="formElement">
        <span className="formLabel">End Date</span>
        <DatePicker
          onChange={(date) =>
            updatingDate(
              "endDate",
              date.getMonth(),
              date.getDate(),
              date.getFullYear()
            )
          }
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
  );
}

export default EditForm
