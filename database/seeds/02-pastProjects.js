
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pastProjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('pastProjects').insert([
        {pastName: "1st Project", pastDescription: "IrishGardens 1st Website", pastUrl: "https://images.craftsnherbs.com/portfolio/irishgardens01.png", pastLink: "https://web.archive.org/web/20120211014255/http://www.theirishgardens.com"}
      ]);
    });
};
