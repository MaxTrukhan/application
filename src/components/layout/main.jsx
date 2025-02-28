import React from 'react'
import { Outlet } from "react-router-dom";
import Aside from './aside/aside'

function Main() {
  return (
    <div>
          <Aside />
          <Outlet/>
    </div>
  );
}

export default Main
