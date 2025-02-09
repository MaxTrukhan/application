import React, { useState } from "react";
import "./App.css";
import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import ProjectDetail from "./pages/project-detail/projectDetail";
import ProjectEdit from "./pages/project-edit/projectEdit";
import Aside from "./Project/aside";
import { favoriteProject } from "./Project/data/FavoriteProject";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [descriptionId, setDescriptionId] = useState(0)

  return (
    <div className="App">
      {/* <Main /> */}

      <Router>
        {favoriteProject.length > 0 && <Aside />}
        <Routes>
          <Route element={<Main />} path="/projects" />
          <Route element={<ProjectCreate />} path="/projects/new" />
          <Route element={<ProjectDetail />} path="/projects/:projectId" />
          <Route element={<ProjectEdit />} path="/projects/:projectId/edit" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
