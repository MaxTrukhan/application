import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([])
  
   
  useEffect(() => {
    const fetchProjects = async () => {
      try {
       const response = await fetch("http://localhost:8003/projects").then((res) => res.json()).then(data => data.projects);
        setProjects(response);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        favorites,
        setFavorites
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
