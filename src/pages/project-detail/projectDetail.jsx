import React, { useEffect, useState } from "react";
import "./projectDetail";
import "../main.css";
import "./projectDetail.css";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetail = ({
  setErr,
  err,
  projects,
  favoriteProjects,
  setFavoriteProjects,
}) => {
  const navigate = useNavigate();

  const param = useParams();
  const { projectId } = param;
  console.log(param);

  const [projectDetail, setProjectDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8003/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetail(data.project);
      })
      .catch(error => setErr({...err, errGet: error.message}));
  }, []);

  const saveToFavorite = async () => {
    const findProject = projects.find((project) => project.id == projectId);
    if (favoriteProjects.find((favorite) => favorite.id == projectId)) {
      try {
        await fetch("http://localhost:8003/projects/favorite", {
          method: "DELETE",
          body: JSON.stringify({ id: projectId }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            setFavoriteProjects(
              favoriteProjects.filter((favorite) => favorite.id !== projectId)
            );
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
        }).then((res) => setFavoriteProjects((prev) => [...prev, findProject]));
      } catch (error) {
        setErr({ ...err, errPost: error.message });
      }
    }
  };
  console.log(favoriteProjects);
  const checkFavorite = favoriteProjects.find(
    (favorite) => favorite.id == projectId
  );
  if (!Object.values(projectDetail).length) return <>Loading...</>;
  return (
    <div style={{ display: "flex", marginTop: "30px" }}>
      <div>
        {err.errGet && <div>{ err.errGet }</div>}
        {err.errPost && <div>{ err.errPost }</div>}
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
