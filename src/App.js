import "./App.css";
import Main from "./Project/Main/main";
import Aside from "./Project/aside";
import { favoriteProject } from "./Project/data/FavoriteProject";

function App() {
  return (
    <div className="App">
      {favoriteProject.length > 0 && <Aside />}
      <Main />
    </div>
  );
}

export default App;
