import React, { useState, useContext } from "react";
import { ProjectContext } from "../../context/contextProjects";
import { useParams } from "react-router-dom";
import Input from "./components/input/input";
import TextArea from "./components/textArea/textArea";
import Date from "./components/datePicker/datePicker";
import "../../pages/project-create/projectCreate.css";

function Form({ formSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        startDate: null,
        endDate: null,
        description: "",
        manager: "",
      });

    const param = useParams();
    const { projectId } = param;

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
      <Date
        onChange={(date) =>
          handleDate(
            "startDate",
            date.getMonth(),
            date.getDate(),
            date.getFullYear()
          )
        }
        selectedDate={formData.startDate}
        label={"Start Date"}
        name={"startDate"}
      />

      <Date
        onChange={(date) =>
          handleDate(
            "endDate",
            date.getMonth(),
            date.getDate(),
            date.getFullYear()
          )
        }
        selectedDate={formData.endDate}
        label={"End Date"}
        minDate={new Date(formData.startDate ? formData.startDate : "")}
        name={"endDate"}
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
