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
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (storedFavorites) {
      setFavorites(storedFavorites);
    } else {
      // If no favorites in localStorage, fetch from the server 
      (async function () {
        await fetch("http://localhost:8003/projects/favorite", {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const fetchedFavorites = data.favorite || [];
            setFavorites(fetchedFavorites);
            // Store favorites in localStorage
           localStorage.setItem("favorites", JSON.stringify(fetchedFavorites)) // We set item to a local storage
          });
      })();
    }
  }, []);
   useEffect(() => {
     if (favorites.length) {
       localStorage.setItem("favorites", JSON.stringify(favorites));
     }
   }, [favorites]);


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
