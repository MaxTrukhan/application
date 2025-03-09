import React, { useState } from "react";
import "../pages/project-create/projectCreate.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "../components/form/form";
import { useContext } from "react";
import { ProjectContext } from "../context/contextProjects";

const ProjectEdit = () => {
  const { formData } = useContext(ProjectContext);

  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;

  const [error, setError] = useState();
  const updateSubmit = () => {
    fetch(`/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        if (res.status === 200) navigate("/projects");
      })
      .catch((error) => setError(`Error found, type erorr: ${error}`));
  };

  return (
    <div>
      {error ? error : ""}
      <Form projectId={projectId} formSubmit={updateSubmit} />
    </div>
  );
};

export default ProjectEdit;
