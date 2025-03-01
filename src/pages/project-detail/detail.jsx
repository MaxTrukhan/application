import React, { useEffect, useState } from "react";
import "./detail";
import "../../components/layout/main.css";
import "./projectDetail.css";
import {useParams } from "react-router-dom";
import ProjectDetail from "../../features/projectDetail";

const Detail = ({projectDetail, setProjectDetail, projects, favoriteProjects, setFavoriteProjects }) => {
  const param = useParams();
  const { projectId } = param;

  const [err, setErr] = useState({
    errGet: "",
    errPost: "",
    errDelete: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8003/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetail(data.project);
      })
      .catch((error) => setErr({ ...err, errGet: error.message }));
  }, []);

  if (!Object.values(projectDetail).length) return <>Loading...</>;
  return (
    <div style={{ display: "flex", marginTop: "30px" }}>
      {" "}
      <ProjectDetail
        projectDetail={projectDetail}
        projects={projects}
        favoriteProjects={favoriteProjects}
        setFavoriteProjects={setFavoriteProjects}
      />
    </div>
  );
};

export default Detail;
