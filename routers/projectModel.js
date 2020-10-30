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
    return db("projects").where(filter).first();
}

function findById(id) {
    return db("projects").where({id: id}).first();
}

function add(user) {
    return db("projects").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("projects").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("projects").where({id: id}).delete();
}

