const db = require("../data/config")

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects').where({ id })
}

function addProject(projectData) {
  return db('projects')
    .insert(projectData)
}

module.exports = {
  find, 
  findById,
  addProject,
}