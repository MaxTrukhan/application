import React from 'react'
import { favoriteProject } from "../mock-api/data/FavoriteProject";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Aside({ favoriteProjects }) {
  const navigate = useNavigate();

  return (
    <div className="aside">
      <h1>Favorite Projects</h1>
      <ul>
        {favoriteProjects.map((favorite) => {
          return (
            <button onClick={() => navigate(`/projects/${favorite.id}`)}>
              <li>{favorite.name}</li>
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default Aside
