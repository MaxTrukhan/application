import React from "react";
import EditForm from "../components/form/editForm";
import "../pages/project-create/projectCreate.css";

const ProjectEdit = ({ update, updated, setUpdated, projectId }) => {
  const updating = (e) => {
    const { name, value } = e.target;
    setUpdated({
      ...updated,
      [name]: value,
    });
  };
  const updatingDate = (name, month, day, year) => {
    setUpdated({
      ...updated,
      [name]: `${month + 1}/${day}/${year}`,
    });
  };

  return (
    <div>
      <EditForm
        updating={updating}
        updatingDate={updatingDate}
        update={update}
        projectId={projectId}
        updated={updated}
      />
    </div>
  );
};

export default ProjectEdit;
