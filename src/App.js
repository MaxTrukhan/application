import React, { useState } from "react";
import "./App.css";
// import Main from "./pages/main";
import Create from "./pages/project-create/create";
import Detail from "./pages/project-detail/detail";
import Edit from "./pages/project-edit/edit";
import Projects from "./pages/project-list/projects";
import Main from "./components/layout/main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [favoriteProjects, setFavoriteProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState({});
  console.log(projects);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                favoriteProjects={favoriteProjects}
                setFavoriteProjects={setFavoriteProjects}
              />
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
                <Create projects={projects} setProjects={setProjects} />
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
            <Route path="projects/:projectId/edit" element={<Edit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
