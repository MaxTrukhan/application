import React from "react";
import "../pages/project-create/projectCreate.css";
import Form from "../components/form/form";
import useEditHook from "../hooks/useEditHook";

const ProjectEdit = () => {

  const { updateSubmit, error } = useEditHook();
  
  return (
    <div>
      {error ? error : ""}
      <Form formSubmit={updateSubmit} />
    </div>
  );
};

export default ProjectEdit;
