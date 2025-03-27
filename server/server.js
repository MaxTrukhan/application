const express = require("express");
const cors = require("cors");
const app = express();
let projects = [
  {
    id: "1",
    name: "Project A",
    startDate: "1/10/2024",
    endDate: "1/7/2025",
    description:
      "This project aims to streamline the workflow by integrating automated processes. It will reduce manual tasks, improve data accuracy, and speed up the decision-making process. The end result will be a more efficient system that supports better collaboration and faster results across teams.",
    manager: "John",
  },
  {
    id: "2",
    name: "Project B",
    startDate: "1/10/2024",
    endDate: "1/7/2025",
    description:
      "Project B focuses on  optimizing customer engagement through new interactive features. With an emphasis on mobile-first design, the project will implement real-time feedback loops, personalized recommendations, and improved accessibility for users across different platforms.",
    manager: "Joun",
  },
  {
    id: "3",
    name: "Project C",
    startDate: "1/10/2024",
    endDate: "3/23/2025",
    description:
      "The goal of Project C is to develop a cutting-edge analytics platform that can process vast amounts of data in real-time. With the help of AI and machine learning, this project aims to provide predictive insights that will empower decision-makers and help forecast future trends with high accuracy.",
    manager: "Kety",
  },
];

let favoriteProjects = [
  {
    id: "3",
    name: "Project C",
    startDate: "1/10/2024",
    endDate: "3/23/2025",
    description:
      "The goal of Project C is to develop a cutting-edge analytics platform that can process vast amounts of data in real-time. With the help of AI and machine learning, this project aims to provide predictive insights that will empower decision-makers and help forecast future trends with high accuracy.",
    manager: "Kety",
  }
];


app.use(cors());
app.use(express.json());

app.get("/projects", (req, res) => {
  console.log(projects)
  res.json({
    projects: projects
  });
});

app.get("/projects/:id", (req, res) => {
  const {params: {id}} = req
  res.json({
    project: projects.find((project) => project.id === id),
  });
});

app.post("/projects", (req, res) => {
  projects.push(req.body);
  res.json(req.body);
});

app.put("/projects/:id", (req, res) => {
  const {
    body,
    params: {id}
  } = req
  const projectID = id
  if (isNaN(projectID)) return res.sendStatus(400);
  const findIndex = projects.findIndex(project => project.id === projectID)
  if (findIndex === -1) return res.sendStatus(404);
  projects[findIndex] = { ...projects[findIndex], ...body };
  res.json()
})


app.get("/projects/favorite", (req, res) => {
  // if (res.status === 400) {
  //   return res.status(400).json({
  //     message: 'Service not valid'
  //   })
  // }
  console.log(favoriteProjects, "GET");
  res.json({
    favorite: favoriteProjects,
  });

})

app.post("/projects/favorite", (req, res) => {
  if (!projects.find((project) => project.id === req.body.id)) { // to check if this  project exist

   return res.status(400).json({
     message: `No Product ${req.body.id}`,
   });
   
 }
   
  favoriteProjects.push(req.body);
  console.log(favoriteProjects, "post");
  res.json(req.body);
});


app.delete("/projects/favorite", (req, res) => {
   if (!favoriteProjects.find((project) => project.id === req.body.id)) {
     // to check if this  project exist
     return res.status(400).json({
       message: `No Product ${req.body.id}`,
     });
   }
  favoriteProjects = favoriteProjects.filter((favorite) => favorite.id !== req.body.id);
  res.status(200).json(req.body);
});
app.listen(8003, () => {
  console.log(`Server is running on port 8003.`);
});
