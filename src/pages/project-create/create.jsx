import React, { useEffect } from "react";
import "./projectCreate.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
// import {z} from 'zod'
// import { useForm, Controller  } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import ProjectCreate from "../../features/projectCreate";
import ProjectEdit from "../../features/projectEdit";
const Create = ({ setProjects, projects }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Number,
    name: "",
    description: "",
    startDate: null, // Initially no date selected
    endDate: null, // Initially no date selected
    manager: "",
  });


  const [error, setError] = useState({
    id: ``,
    name: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();

    if (projects.find((project) => project.id == formData.id)) {
      setError({
        ...error,
        id: `Next valid ID is ${projects.length + 1}`,
      });
    } else if (projects.find((project) => project.name == formData.name)) {
      setError({
        ...error,
        name: "The same name already exist ",
      });
    } else {
      try {
        await fetch("http://localhost:8003/projects", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) navigate("/projects");
        });
      } catch (error) {
        // set Error
      }
    }
  };
  return (
    <ProjectCreate
      formSubmit={formSubmit}
      setFormData={setFormData}
      formData={formData}
      error={error}
    />
  );
};

export default Create;
