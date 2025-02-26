import { useNavigate } from "react-router-dom";
import ProjectList from "./project-list/projectList";
function Main({ children }) {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="create">
        <button onClick={() => navigate("/projects/new")} className="createBtn">
          Create Project
        </button>
      </div>
      {children}
    </div>
  );
}

export default Main;
