import React from 'react'
import { favoriteProject } from './data/FavoriteProject';

function Aside() {
  return (
    <div className="aside">
      <h1>Favorite Projects</h1>
      <ul>
        {favoriteProject.map(favorite => {
          return <li>{favorite.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Aside
