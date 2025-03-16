import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";
import { useNavigate } from "react-router-dom";


export default function useEditHook() {
      const navigate = useNavigate();
  const { formData } = useContext(ProjectContext);
  const param = useParams();
  const { projectId } = param;
  

  const [error, setError] = useState();

  const updateSubmit = async() => {
    await fetch(`/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        if (res.status === 200) {
           navigate("/projects");
          toast.success('Edit success')
        }
       
      })
      .catch((error) =>
        setError(`Error found, type erorr: ${error}`))
        toast.error(error.message)
      ;
    };
    return { updateSubmit, error, projectId };
}
