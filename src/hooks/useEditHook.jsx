import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/contextProjects";

export default function useEditHook() {
  const navigate = useNavigate();
  const param = useParams();
  const { projects } = useContext(ProjectContext);
  const { projectId } = param;

  const [error, setError] = useState();

  const updateSubmit = async (e) => {
    e.preventDefault();
    const formElements = Array.from(e.target.elements);
    // const formObject = {};
    // for (let element of formElements) {
    //   if (element.name && element.type !== "submit") {
    //     formObject[element.name] = element.value;
    //   }
    // }
    // console.log(formElements['input'])
  const edited = formElements.reduce((acc, element) => {
      if (element.value) {
        acc = {...acc, [element.name]: element.value}
      }
      return acc
    }, {})
    

    await fetch(`/projects/${projectId}`, {
      method: "PUT",
      body: JSON.stringify(edited),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/projects");
          toast.success("Edit success");
        }
        return res.json();
      })
      .catch((error) => toast.error(error.meassage));
  };
  return { updateSubmit, error, projectId };
}
