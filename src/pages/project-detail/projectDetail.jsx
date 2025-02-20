import React from "react";
import './projectDetail'
import { useNavigate, useParams } from "react-router-dom";

import "./projectDetail.css";

const ProjectDetail = ({ projects, favoriteProjects, setFavoriteProjects }) => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;
  console.log(param);

  const chosenProject = projects.find((project) => project.id == projectId);
  return (
    <div className="detail">
      {chosenProject !== null && chosenProject !== undefined ? (
        <>
          {Object.entries(chosenProject).map(
            ([key, value]) =>
              key !== "saved" && (
                <>
                  <div key={key}>
                    <p className="detail__info">
                      <span className="detail__title">{key}:</span>
                      <span className="detail__value">{value}</span>
                    </p>
                  </div>
                </>
              )
          )}
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
