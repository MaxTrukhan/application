import ProjectList from "./project-list/projectList";
function Main({ favoriteProjects, setFavoriteProjects, project }) {
  return (
    <ProjectList
      project={project}
      favoriteProjects={favoriteProjects}
      setFavoriteProjects={setFavoriteProjects} //! Prop Driling
    />
  );
}

export default Main;
