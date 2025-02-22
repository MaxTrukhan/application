import React from "react";
import './projectDetail'
import '../main.css'
import { useNavigate, useParams } from "react-router-dom";

import "./projectDetail.css";

const ProjectDetail = ({ projects, favoriteProjects, setFavoriteProjects }) => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;
  console.log(param);

  const chosenProject = projects.find((project) => project.id == projectId);
  const checkFavorite = favoriteProjects.find(
    (favorite) => favorite.id == projectId
  );
  return (
    <div className="detail">
      {chosenProject !== null &&
      chosenProject !== undefined &&
      checkFavorite.id !== null ? (
        <>
          <div>
            {Object.entries(chosenProject).map(([key, value]) => (
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
            className={`save__project-btn ${
              checkFavorite ? "savedStar" : "star"
            }`}
          />
        </>
      ) : (
        <div className="no__result">
          <p>No Results</p>
          <div className="detail__btn-flex">
            <button
              className=" detail__btn createBtn "
              onClick={() => navigate("/projects")}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
