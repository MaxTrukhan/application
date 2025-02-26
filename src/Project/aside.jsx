import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Aside({ favoriteProjects, setFavoriteProjects }) {
  const navigate = useNavigate();

   useEffect(() => {
    fetch("http://localhost:8003/projects/favorite")
      .then((res) => res.json())
      .then((data) => {
        setFavoriteProjects(data.favorite ? data.favorite : [])
      });
   }, [])
  return (
    <>
      {favoriteProjects?.length > 0 && (
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
      )}
    </>
  );
}

export default Aside
