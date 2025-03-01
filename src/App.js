import React, { useState } from "react";
import "./App.css";
// import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import Detail from "./pages/project-detail/detail";
import Edit from "./pages/project-edit/edit";
import Aside from "./components/layout/aside/aside";
import Projects from "./pages/project-list/projects";
import Main from "./components/layout/main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Aside
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects}
                />
              </Main>
            }
          >
            <Route
              path="projects"
              element={
                <Projects
                  projects={projects}
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects}
                  setProjects={setProjects}
                />
              }
            />
            <Route
              path="projects/new"
              element={
                <ProjectCreate projects={projects} setProjects={setProjects} />
              }
            />
            <Route
              path="projects/:projectId"
              element={
                <Detail
                  projects={projects}
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects}
                  setProjectDetail={setProjectDetail}
                  projectDetail={projectDetail}
                />
              }
            />
            <Route
              path="projects/:projectId/edit"
              element={<Edit/>}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
