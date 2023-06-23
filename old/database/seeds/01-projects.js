
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "A Web Developers Guide", description: "A guide of tips, tricks and hints for Developers of all levels", url: "https://images.craftsnherbs.com/portfolio/guide.jpg", source: "https://github.com/beedev-services/new-help-guide", link: "https://navyladyveteran.com"}
      ]);
    });
};
