import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useCreateHook() {
    const navigate = useNavigate()
    const [error, setError] = useState()

  const formSubmit = async (e) => {
    e.preventDefault();
    const formElements = Array.from(e.target.elements);
    // const formObject = {};

    const create = formElements.reduce((acc, element) => {
        acc = {...acc, [element.name]: element.value}
        return acc
    }, {})
    try {
      await fetch("http://localhost:8003/projects", {
        method: "POST",
        body: JSON.stringify(create),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          navigate("/projects");
          toast.success("Post Success");
        }
      });
    } catch (error) {
      if (error) {
        setError(`You have error: ${error.message}`);
        toast.success(error.message);
      }
    }
    };
    return { formSubmit, error };
}

export default useCreateHook;
