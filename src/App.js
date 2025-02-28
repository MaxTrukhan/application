import React, { useState } from "react";
import "./App.css";
// import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import ProjectDetail from "./pages/project-detail/projectDetail";
import ProjectEdit from "./pages/project-edit/projectEdit";
import Aside from "./components/layout/aside/aside";
import ProjectList from "./pages/project-list/projects";
import Main from "./components/layout/main";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route
              element={
                <ProjectList
                  projects={projects}
                  setProjects={setProjects}
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects}
                />
              }
              path="projects"
            />
            <Route
              element={
                <ProjectCreate projects={projects} setProjects={setProjects} />
              }
              path="projects/new"
            />
            <Route
              element={
                <ProjectDetail
                  projects={projects}
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects}
                />
              }
              path="projects/:projectId"
            />
            <Route
              element={
                <ProjectEdit projects={projects} setProjects={setProjects} />
              }
              path="projects/:projectId/edit"
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
