import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProjectsCreateBtn() {
    const navigate = useNavigate();
  return (
    <div className="create">
      <button onClick={() => navigate("/projects/new")} className="createBtn">
        Create Project
      </button>
    </div>
  );
}

export default ProjectsCreateBtn
