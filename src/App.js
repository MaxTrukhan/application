import React, { useState } from "react";
import "./App.css";
import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import ProjectDetail from "./pages/project-detail/projectDetail";
import ProjectEdit from "./pages/project-edit/projectEdit";
import Aside from "./Project/aside";
import ProjectList from "./pages/project-list/projectList";

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
              <Main>
                <ProjectList
                  projects={projects} // to get acces to projects becouse we need it also at projects deteils
                  setProjects={setProjects}
                  favoriteProjects={favoriteProjects}
                  setFavoriteProjects={setFavoriteProjects} 
                />
              </Main>
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
