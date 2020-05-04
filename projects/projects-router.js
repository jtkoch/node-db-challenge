const express = require('express')

const projects = require('./projects-model')

const router = express.Router()

router.get("/", (req, res) => {
  projects.find()
    .then((projectList) => {
      res.json(projectList)
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Failed to get project list',
      })
    })
})

router.post('/', (req, res) => {
  const projectData = req.body;
  projects.addProject(projectData)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

module.exports = router;