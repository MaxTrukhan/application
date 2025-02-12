import { projects } from './data/Projects';
const express = require('express')
const app = express();

app.get('/api/projects', (req, res) => {
    res.send(projects);
})