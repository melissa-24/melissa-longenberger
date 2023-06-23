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
    return db("pastProjects");
}

function findBy(filter) {
    return db("pastProjects")
    .where(filter).first();
}

function findById(id) {
    return db("pastProjects")
    .where({id}).first();
}

function add(pastProject) {
    return db("pastProjects")
    .insert(pastProject, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("pastProjects")
    .where({ id }
        ).update(changes, '*')
}

function remove(id) {
    return db("pastProjects")
    .where({id}).delete();
}

