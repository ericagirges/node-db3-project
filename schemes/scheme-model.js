const db = require("../data/db-config.js");

module.exports = {
    find,
    add,
    findById,
    update,
    remove,
    findSteps
};

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes").where({id}).first();
}