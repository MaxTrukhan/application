import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/contextProjects";
import { useParams, Link } from "react-router-dom";
import { getDateInfo } from "./helpers/dates";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "./components/input/input";
import TextArea from "./components/textArea/textArea";
import DateComponent from "./components/datePicker/datePicker";

import "../../pages/project-create/projectCreate.css";

function Form({ formSubmit }) {
  const navigate = useNavigate;
  const { projects } = useContext(ProjectContext);
  const param = useParams();
  const { projectId } = param;

  const editingProject = projects.find((project) => project.id === projectId) || "";

  const [formData, setFormData] = useState({
    id: "",
    name: projectId ? editingProject.name : "",
    startDate: projectId ? editingProject.startDate : null,
    endDate: projectId ? editingProject.endDate : null,
    description: projectId ? editingProject.description : "",
    manager: projectId ? editingProject.manager : "",
  });
  const [minDate, setMinDate] = useState(new Date());

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDate = (name, date) => {
    const { year, month, day } = getDateInfo(date);
    setFormData({
      ...formData,
      [name]: `${month + 1}/${day}/${year}`,
    });
  };

  if (!editingProject) {
    toast(
      <>
        If you need help with error:
        <Link to={"/help"}>/help</Link>
      </>
    );
    return <h1 style={{
      position: "absolute",
      left: "30%"
    }}>Not Found 404!</h1>;
  }

  return (
    <form className="form" onSubmit={formSubmit}>
      <Input
        name={"id"}
        value={projectId || formData.id}
        onChange={handleFormData}
        label={"Project ID"}
        editable={!projectId}
      />
      <Input
        name={"name"}
        value={formData.name}
        onChange={handleFormData}
        label={"Project Name"}
      />
      <TextArea
        onChange={(event) => handleFormData(event)}
        name={"description"}
        value={formData.description}
      />
      <DateComponent
        onChange={(date) => {
          handleDate("startDate", date);
          setMinDate(date);
        }}
        selectedDate={formData.startDate}
        label={"Start Date"}
        name={"startDate"}
      />

      <DateComponent
        onChange={(date) => handleDate("endDate", date)}
        selectedDate={formData.endDate}
        label={"End Date"}
        name={"endDate"}
        minDate={minDate}
      />

      <Input
        name={"manager"}
        value={formData.manager}
        onChange={handleFormData}
        label={"Project Manager"}
      />
      <button type="Submit" className="formBtn">
        {projectId ? "Edit" : "Create"}
      </button>
    </form>
  );
}

export default Form;
