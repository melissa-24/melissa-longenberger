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
    return db("pastProjects").where(filter).first();
}

function findById(id) {
    return db("pastProjects").where({id: id}).first();
}

function add(user) {
    return db("pastProjects").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("pastProjects").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("pastProjects").where({id: id}).delete();
}

