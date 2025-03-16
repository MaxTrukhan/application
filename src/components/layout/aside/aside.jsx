import React from "react";
import "../../../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../../../context/contextProjects";


function Aside() {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(ProjectContext);

  useEffect(() => {
    (async function () {
      await fetch("http://localhost:8003/projects/favorite")
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data.favorite ? data.favorite : []);
        });
    })();
  }, []);

  return (
    <div className="aside">
      <h1>Favorite Projects</h1>
      <ul>
        {favorites.map((favorite) => (
          <button key={favorite.id} onClick={() => navigate(`/projects/${favorite.id}`)}>
            <li>{favorite.name}</li>
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Aside;
