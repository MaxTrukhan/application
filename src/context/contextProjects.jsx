import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [favorites, setFavorites] = useState([])

  return (
    <ProjectContext.Provider
      value={{
        projects,
        favorites,
        setFavorites,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
