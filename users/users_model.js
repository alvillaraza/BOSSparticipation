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
  return db("users");
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users').where(filter);
}

// function getUserActivities(userId) {
//   return db("activities as a")
//     .join("users as u", "u.id", "a.user_id")
//     .select("p.id", "p.text", "u.name as postedBy")
//     .where("p.user_id", userId);
// }

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return getById(ids[0]); 
    });
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}