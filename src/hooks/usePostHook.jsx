import { useContext, useState } from 'react';
import { ProjectContext } from '../context/contextProjects';


export default function usePostHook() {
      const { projects, favorites, setFavorites } = useContext(ProjectContext);


    const [err, setErr] = useState({
      errPost: "",
      errDelete: "",
    });

  const saveToFavorite = async (id) => {
    console.log(id)
      if (
        favorites.find(
          (favorite) => favorite.id === +id 
        )
      ) {
        try {
          const res = await fetch("http://localhost:8003/projects/favorite", {
            method: "DELETE",
            body: JSON.stringify({ id: +id}), // Make sure the id is being sent
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 200) {
            setFavorites(
              favorites.filter(
                (favorite) => favorite.id !== +id 
              )
            );
          } else {
            throw new Error(`Can't delete favorite with ID: ${id}`);
          }
        } catch (error) {
          setErr({ ...err, errDelete: error.message });
        } finally {
          setTimeout(() => {
            setErr({ ...err, errDelete: "" });
          }, 7000);
        }
      } else {
        const savedProject = projects.find(
          (project) => project.id === +id 
        );
        console.log(savedProject)
        console.log(projects);

        try {
          const res = await fetch("http://localhost:8003/projects/favorite", {
            method: "POST",
            body: JSON.stringify(savedProject),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 200) {
            setFavorites((prevProjects) => [...prevProjects, savedProject]);
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          setErr({ ...err, errPost: error.message });
        } finally {
          setTimeout(() => {
            setErr({ ...err, errPost: "" });
          }, 7000);
        }
      }
    };
    return { saveToFavorite, err};
}
