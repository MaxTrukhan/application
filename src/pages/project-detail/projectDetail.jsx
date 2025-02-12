import React from "react";
import './projectDetail'
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../mock-api/data/Projects";
import "./projectDetail.css";

const ProjectDetail = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { projectId } = params;

  const chosenProject = projects.find((project) => project.id == projectId);

  return (
    <div className="detail">
      {Object.entries(chosenProject).map(
        ([key, value]) =>
          key !== "saved" && (
            <div key={key}>
              <p className="detail__info">
                <span className="detail__title">{key}:</span>
                <span className="detail__value">{value}</span>
              </p>
            </div>
          )
      )}
      <button
        className=" detail__Btn createBtn "
        onClick={() => navigate("/projects")}
      >
        Main
      </button>
    </div>
  );
};

export default ProjectDetail;
