import React from "react";
import "./App.css";
// import Main from "./pages/main";
import Projects from "./pages/project-list/projects";
import CustumerHelp from "./custumer_help/custumerHelp";
import Main from "./components/layout/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectCreate from "./features/projectCreate";
import ProjectEdit from "./features/projectEdit";
import ProjectDetail from "./features/projectDetail";
import { DetailProvider } from "./context/contextDetail";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/help" element={<CustumerHelp/>}/>
            <Route path="projects" element={<Projects />} />

            <Route
              path="projects/:projectId"
              element={
                <DetailProvider>
                  <ProjectDetail />
                </DetailProvider>
              }
            />

            <Route path="projects/new" element={<ProjectCreate />} />
            <Route path="projects/:projectId/edit" element={<ProjectEdit />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
