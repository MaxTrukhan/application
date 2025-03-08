import React from "react";
import "./detail";
import "../../components/layout/main.css";
import "./projectDetail.css";
import ProjectDetail from "../../features/projectDetail";
import { useContext } from "react";
import { DetailProvider } from "../../context/contextDetail";
// import { useContext } from "react";
// import { contextForm } from "../../context/contextForm";

const Detail = () => {
  // const { projectDetail, setProjectDetail } = useContext(contextForm);
  const { projectDetail, projectId } = useContext(DetailProvider);

  if (!Object.values(projectDetail).length) return <>Loading...</>;
  return (
    <div style={{ display: "flex", marginTop: "30px" }}>
      {" "}
      <ProjectDetail projectDetail={projectDetail} projectId={projectId} />
    </div>
  );
};

export default Detail;
