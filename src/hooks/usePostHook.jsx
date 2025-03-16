import { useContext, useState } from 'react';
import { toast } from "react-toastify";
import { ProjectContext } from '../context/contextProjects';


export default function usePostHook() {
      const { projects, favorites, setFavorites } = useContext(ProjectContext);


    const [err, setErr] = useState("");

  const saveToFavorite = async (id) => {
    console.log(favorites);
    if (
      favorites.find(
        (favorite) => +favorite.id === +id
        )
      ) {
        try {
          const res = await fetch("http://localhost:8003/projects/favorite", {
            method: "DELETE",
            body: JSON.stringify({ id: id}),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.status === 200) {
            setFavorites(
              favorites.filter(
                (favorite) => +favorite.id !== +id 
              )             
            );
             toast.success("Delete Success");
          } else {
            throw new Error(`Can't delete favorite with ID: ${id}`);
          }
        } catch (error) {
          setErr(error.message);
          toast.error(error.message);
        } 
      } else {
        const savedProject = projects.find(
          (project) => +project.id === +id 
        );

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
            toast.success("Post Success");
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          setErr(error.message);
           toast.error(error.message);
        } 
      }
    };
    return { saveToFavorite, err};
}
