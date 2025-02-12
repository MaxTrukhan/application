import ProjectList from "./project-list/projectList";
function Main({favoriteProjects, setFavoriteProjects }) {
  return (
    <ProjectList
      favoriteProjects={favoriteProjects}
      setFavoriteProjects={setFavoriteProjects} //! Prop Driling
    />
  );
}

export default Main;
