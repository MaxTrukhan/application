import React from "react";
import Aside from "./aside/aside";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Aside/>
      <Outlet />
    </div>
  );
}

export default Main;
