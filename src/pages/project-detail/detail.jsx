import React from "react";
import "./detail";
import "../../components/layout/main.css";
import "./projectDetail.css";
import ProjectDetail from "../../features/projectDetail";
import { useContext } from "react";
import { DetailContext } from "../../context/contextDetail";
// import { useContext } from "react";
// import { contextForm } from "../../context/contextForm";

const Detail = () => {
  // const { projectDetail, setProjectDetail } = useContext(contextForm);
  return (
    <div style={{ display: "flex", marginTop: "30px" }}>
      {" "}
      <ProjectDetail/>
    </div>
  );
};

export default Detail;
