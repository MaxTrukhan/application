import React from "react";
import Aside from "./aside/aside";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../../context/contextProjects";
import Loading from "../../loading/loading";
function Main() {
  const {loading} = useContext(ProjectContext);
  return (
    <div>
      <Aside />
      {loading ? <Loading /> : <Outlet />}
    </div>
  );
}

export default Main;
