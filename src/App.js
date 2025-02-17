import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import ProjectDetail from "./pages/project-detail/projectDetail";
import ProjectEdit from "./pages/project-edit/projectEdit";
import Aside from "./Project/aside";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [favoriteProjects, setFavoriteProjects] = useState([])
  // const [proejcts, setProjects] = useState([])


  const [project, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => { setProjects(data); console.log(data);});
  }, []);

  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        {favoriteProjects.length > 0 && (
          <Aside favoriteProjects={favoriteProjects} />
        )}
        <Routes>
          <Route
            element={
              <Main
                project={project}
                favoriteProjects={favoriteProjects}
                setFavoriteProjects={setFavoriteProjects}
              />
            }
            path="/projects"
          />
          <Route
            element={
              <ProjectCreate setProjects={setProjects} proejcts={project} />
            }
            path="/projects/new"
          />
          <Route element={<ProjectDetail />} path="/projects/:projectId" />
          <Route element={<ProjectEdit />} path="/projects/:projectId/edit" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
