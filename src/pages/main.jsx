import { useNavigate } from "react-router-dom";
import ProjectList from "./project-list/projectList";
import { Children } from "react";
function Main({
  Children,
}) {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
      {Children}
    </div>
  );
}

export default Main;
