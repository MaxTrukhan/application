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
              
                favoriteProjects={favoriteProjects}
                setFavoriteProjects={setFavoriteProjects}
              />
            }
            path="/projects"
          />
          <Route
            element={
              <ProjectCreate />
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
