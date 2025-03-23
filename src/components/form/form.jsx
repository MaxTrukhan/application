import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/contextProjects";
import { useParams } from "react-router-dom";
import Input from "./components/input/input";
import TextArea from "./components/textArea/textArea";
import DateComponent from "./components/datePicker/datePicker";
import { getDateInfo } from "./helpers/dates";
import "../../pages/project-create/projectCreate.css";

function Form({ formSubmit }) {
  const { projects } = useContext(ProjectContext);
  const param = useParams();
  const { projectId } = param;

  const editingProject = projects.find((project) => project.id === projectId);

  console.log(projects);
  const [formData, setFormData] = useState({
    id: "",
    name: projectId ? editingProject.name : "",
    startDate: projectId ? editingProject.startDate : null,
    endDate: projectId ? editingProject.endDate : null,
    description: projectId ? editingProject.description : "",
    manager: projectId ? editingProject.manager : "",
  });
  const [minDate, setMinDate] = useState(new Date());

  // projects.reduce((acc, project) => {
  //     if (projectId) {
  //       const editingProject = project.id === projectId
  //       acc = editingProject;
  //     }
  // }, {});

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
        value={projectId ? editingProject.name : formData.name}
        onChange={handleFormData}
        label={"Project Name"}
      />
      <TextArea
        onChange={(event) => handleFormData(event)}
        name={"description"}
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
