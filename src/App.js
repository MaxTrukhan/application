import "./App.css";
import Main from "./pages/main";
import ProjectCreate from "./pages/project-create/projectCreate";
import ProjectDetail from "./pages/project-detail/projectDetail";
import Aside from "./Project/aside";
import { favoriteProject } from "./Project/data/FavoriteProject";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {favoriteProject.length > 0 && <Aside />}
      {/* <Main /> */}
      <Router>
        <Routes>
          <Route element={<Main />} path="/projects" />
          <Route element={<ProjectCreate />} path="/projects/new" />
          <Route element={<ProjectDetail />} path="/projects/:projectId" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
