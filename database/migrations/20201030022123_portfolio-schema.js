
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.string('url').notNullable();
  })
  .createTable('pastProjects', tbl => {
      tbl.increments();
      tbl.string('pastName').notNullable();
      tbl.string('pastDescription');
      tbl.string('pastUrl').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('pastProjects')
  .dropTableIfExists('projects');
};
