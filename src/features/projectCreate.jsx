import React, { useEffect } from "react";
import "../pages/project-create/projectCreate.css";
import CreateForm from "../components/form/createForm";

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
      <CreateForm
        formSubmit={formSubmit}
        handleFormData={handleFormData}
        formData={formData}
        error={error}
        handleData={handleData}
      />
    </div>
  );
};

export default ProjectCreate;
