import React from "react";
import { useState } from "react";
import "../project-create/projectCreate.css";
import { useNavigate, useParams } from "react-router-dom";
import ProjectEdit from "../../features/projectEdit";

const Edit = () => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;

  const [updated, setUpdated] = useState({
    id: projectId,
    name: "",
    startDate: null,
    endDate: null,
    description: "",
    manager: "",
  });

  const update = () => {
    fetch(`/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(updated),
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
      .catch((error) => console.log(`Error found, type erorr: ${error}`));
  };

  return (
    <ProjectEdit
      update={update}
      setUpdated={setUpdated}
      updated={updated}
      projectId={projectId}
    />
  );
};

export default Edit;
