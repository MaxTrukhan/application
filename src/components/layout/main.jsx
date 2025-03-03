import React from "react";
import Aside from "./aside/aside";
import { Outlet } from "react-router-dom";

function Main({ favoriteProjects, setFavoriteProjects }) {
  return (
    <div>
      <Aside
        favoriteProjects={favoriteProjects}
        setFavoriteProjects={setFavoriteProjects}
      />
      <Outlet />
    </div>
  );
}

export default Main;
