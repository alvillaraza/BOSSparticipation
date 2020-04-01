const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  // getUserPosts,
  findBy,
  insert,
  update,
  remove
};

function get() {
  return db("employees");
}

function getById(id) {
  return db("employees")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('employees').where(filter);
}

// function getUserActivities(userId) {
//   return db("activities as a")
//     .join("employees as u", "u.id", "a.user_id")
//     .select("p.id", "p.text", "u.name as postedBy")
//     .where("p.user_id", userId);
// }

function insert(employee) {
  return db("employees")
    .insert(employee)
    .then(ids => {
      return getById(ids[0]); 
    });
}

function update(id, changes) {
  return db("employees")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("employees")
    .where("id", id)
    .del();
}