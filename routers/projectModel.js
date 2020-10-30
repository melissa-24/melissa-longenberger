const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("projects");
}

function findBy(filter) {
    return db("projects")
    .where(filter).first();
}

function findById(id) {
    return db("projects")
    .where({id}).first();
}

function add(project) {
    return db("projects")
    .insert(project, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("projects")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("projects")
    .where({ id }).del();
}

