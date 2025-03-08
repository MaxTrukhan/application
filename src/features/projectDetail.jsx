import React, { useState } from "react";
import "./projectDetail";
import "../components/layout/main.css";
import "../pages/project-detail/projectDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectProvider } from "../context/contextProjects";
import { DetailProvider } from "../context/contextDetail";
const ProjectDetail = () => {
  const { projects, favorites, setFavorites, projectDetail } =
    useContext(ProjectProvider);
  const {errGet} = useContext(DetailProvider);
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;

  const [err, setErr] = useState({
    errPost: "",
    errDelete: "",
  });

  const saveToFavorite = async () => {
    const findProject = projects.find((project) => project.id == projectId);
    if (favorites.find((favorite) => favorite.id == projectId)) {
      try {
        await fetch("http://localhost:8003/projects/favorite", {
          method: "DELETE",
          body: JSON.stringify({ id: projectId }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setFavorites([
              favorites.filter((favorite) => favorite.id !== projectId),
            ]);
          }
        });
      } catch (error) {
        setErr({ ...err, errDelete: error.message });
      }
    } else {
      try {
        await fetch("http://localhost:8003/projects/favorite", {
          method: "POST",
          body: JSON.stringify(findProject),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => setFavorites((prev) => [...prev, findProject]));
      } catch (error) {
        setErr({ ...err, errPost: error.message });
      }
    }
  };

  const checkFavorite = favorites.find(
    (favorite) => favorite.id == projectId
  );
  if (!Object.values(projectDetail).length) return <>Loading...</>;
  return (
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
        onClick={() => saveToFavorite()}
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
