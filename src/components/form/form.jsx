import React, { useState, useContext } from "react";
import "../../pages/project-create/projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ProjectContext } from "../../context/contextProjects";
import { useParams } from "react-router-dom";
import Input from "./components/input/input";
import TextArea from "./components/textArea/textArea";

function Form({ formSubmit }) {
    const param = useParams();
    const { projectId } = param;

  const { setFormData, formData} = useContext(ProjectContext);

  const [error, setError] = useState({});

  const handleFormData = (e) => {
    const { name, value } = e.target;
  
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
      />
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
