import React, { useState } from "react";
import "./App.css";
// import Main from "./pages/main";
import Detail from "./pages/project-detail/detail";
import Projects from "./pages/project-list/projects";
import Main from "./components/layout/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectCreate from "./features/projectCreate";
import ProjectEdit from "./features/projectEdit";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="projects" element={<Projects />} />

            <Route path="projects/:projectId" element={<Detail />} />

            <Route path="projects/new" element={<ProjectCreate />} />
            <Route path="projects/:projectId/edit" element={<ProjectEdit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
