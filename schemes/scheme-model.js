const db = require("../data/db-config.js");

module.exports = {
  find,
  add,
  findById,
  update,
  remove,
  findSteps,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, id)
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

function update(id, changes) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
    return db("schemes").where({ id }).del();
}

function findSteps(id) {
    return db("steps").where("scheme_id", id);
}
