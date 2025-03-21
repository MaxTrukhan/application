import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/form";
import "../pages/project-create/projectCreate.css";
import useCreateHook from "../hooks/useCreateHook";

const ProjectCreate = () => {
  const { formSubmit, error } = useCreateHook();
 

  return (
    <div className="new">
      {error ? error : ""}
      <Form formSubmit={formSubmit} />
    </div>
  );
};

export default ProjectCreate;
