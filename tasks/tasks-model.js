const db = require('../data/config');

function findTasks() {
  return db('tasks');
}

function findTaskById(id) {
  return db('tasks').where({ id });
}

function addTasks(resourceData) {
  return db('tasks')
    .insert(resourceData);
}

module.exports = {
  findTasks,
  findTaskById,
  addTasks,
};