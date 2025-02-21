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
  const [projects, setProjects] = useState([]);

  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        <Aside
          favoriteProjects={favoriteProjects}
          setFavoriteProjects={setFavoriteProjects}
        />

        <Routes>
          <Route
            element={
              <Main
                projects={projects}
                setProjects={setProjects}
                favoriteProjects={favoriteProjects}
                setFavoriteProjects={setFavoriteProjects}
              />
            }
            path="/projects"
          />
          <Route
            element={
              <ProjectCreate projects={projects} setProjects={setProjects} />
            }
            path="/projects/new"
          />
          <Route
            element={
              <ProjectDetail
                projects={projects}
                favoriteProjects={favoriteProjects}
              />
            }
            path="/projects/:projectId"
          />
          <Route
            element={
              <ProjectEdit projects={projects} setProjects={setProjects} />
            }
            path="/projects/:projectId/edit"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
