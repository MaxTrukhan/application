import React from "react";
import "./projectDetail";
import "../components/layout/main.css";
import "../pages/project-detail/projectDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../context/contextProjects";
import { DetailContext } from "../context/contextDetail";
import usePostHook from "../hooks/usePostHook";

const ProjectDetail = () => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;

  const { favorites } = useContext(ProjectContext);
  const { errGet, projectDetail } = useContext(DetailContext);


  const { saveToFavorite, err } = usePostHook(); // Post and Delete

  const checkFavorite = favorites.find((favorite) => favorite.id == projectId);
  if (!Object.values(projectDetail).length) return <>Loading...</>;
  return (
    <>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div>
          {errGet && <div>{errGet}</div>}
          {err.errPost && <div>{err.errPost}</div>}
          {err.errDelete && <div>{err.errDelete}</div>}

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
        <button // star
          onClick={() => saveToFavorite(projectId)}
          style={
            !checkFavorite
              ? { backgroundColor: "rgb(137, 137, 137)" }
              : { backgroundColor: "rgb(174, 149, 10)" }
          }
          className={`save__project-btn ${
            checkFavorite ? "savedStar" : "star"
          }`}
        />
      </div>
      {/* <Outlet/> */}
    </>
  );
};

export default ProjectDetail;
