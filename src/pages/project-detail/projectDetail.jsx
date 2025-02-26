import React, { useEffect, useState } from "react";
import './projectDetail'
import "../main.css"
import "./projectDetail.css";
import { useNavigate, useParams } from "react-router-dom";



const ProjectDetail = ({ projects, favoriteProjects, setFavoriteProjects }) => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;
  console.log(param);

  const [projectDetail, setProjectDetail] = useState({}) 
  useEffect(() => {
     fetch(`http://localhost:8003/projects/${projectId}`)
       .then((res) => res.json())
       .then((data) => {
         setProjectDetail(data.project);
       });
  }, [])

  console.log(projects, "projectId");
  const checkFavorite = favoriteProjects?.find(
    (favorite) => favorite.id == projectId
  );
  if(!Object.values(projectDetail).length) return<>Loading...</>
  return (
    <div style={{display: "flex", marginTop: '30px'}}>
      <div>
        {Object.entries(projectDetail).map(([key, value]) => (
          <>
            <div key={key}>
              <p className="detail__info">
                <span className="detail__title">{key}:</span>
                <span className="detail__value">{value}</span>
              </p>
            </div>
          </>
        ))}
        <div className="detail__btn-flex">
          <button
            className=" detail__btn createBtn "
            onClick={() => navigate("/projects")}
          >
            Back
          </button>
          <button
            className=" detail__btn createBtn "
            onClick={() => navigate(`/projects/${projectId}/edit`)}
          >
            Edit
          </button>
        </div>
      </div>
      <div
        style={
          !checkFavorite
            ? { backgroundColor: "rgb(137, 137, 137)" }
            : { backgroundColor: "rgb(174, 149, 10)" }
        }
        className={`save__project-btn ${checkFavorite ? "savedStar" : "star"}`}
      />
    </div>
  );
};

export default ProjectDetail;
