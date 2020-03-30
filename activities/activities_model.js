const db = require('../data/db-config.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db('activities');
}

function getById(id) {
  return db('activities')
    .where({ id })
    .first();
}

function insert(activity) {
  return db('activities')
    .insert(activity)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('activities')
    .where({ id }).update(changes);
}

function remove(id) {
  return db('activities')
    .where('id', id)
    .del();
}