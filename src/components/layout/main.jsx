import React from 'react'
import { Outlet } from "react-router-dom";

function Main({children}) {
  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
}

export default Main
