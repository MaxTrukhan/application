import React from "react";
import Aside from "./aside/aside";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Main() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Aside />
      <Outlet />
    </div>
  );
}

export default Main;
