import React from 'react'
import DatePicker from 'react-datepicker'
import "../project-create/projectCreate.css";
import { useNavigate, useParams } from 'react-router-dom';

const ProjectEdit = () => {
  const navigate = useNavigate()

  const param = useParams()
  const { projectId } = param;
  return (
    <div>
      <form className="formCreate">
        <label className="formElement">
          <span className="formLabel">Project ID</span>
          <span>{projectId}</span>
        </label>

        <label className="formElement">
          <span className="formLabel">Project Name</span>
          <input name="name" />
        </label>

        <label className="formElement">
          <span className="formLabel">Description</span>
          <textarea name="description" rows="10" cols="50" />
        </label>

        <label className="formElement">
          <span className="formLabel">Start Date</span>
          <DatePicker />
        </label>

        <label className="formElement">
          <span className="formLabel">End Date</span>
          <DatePicker />
        </label>

        <label className="formElement">
          <span className="formLabel">Project Manager</span>
          <input name="projectManager" />
        </label>

        <button onClick={() => navigate('/projects')} type="Submit" className="formBtn">
          Edit
        </button>
      </form>
    </div>
  );
}

export default ProjectEdit
