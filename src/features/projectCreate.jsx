import React, { useState, useContext } from "react";
import "../pages/project-create/projectCreate.css";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/form";
import { ProjectProvider } from "../context/contextProjects";
const ProjectCreate = () => {
  const { formData } = useContext(ProjectProvider);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8003/projects", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) navigate("/projects");
      });
    } catch (error) {
      if (error) setError(`You have error: ${error.message}`);
    }
  };

  return (
    <div className="new">
      {error ? error : ""}
      <Form formSubmit={formSubmit} />
    </div>
  );
};

export default ProjectCreate;
