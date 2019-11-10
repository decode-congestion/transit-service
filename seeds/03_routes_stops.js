exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('routes_stops').del()
    .then(function () {
      const seeds = require('../data/routes_stops/data.json')
      return knex('routes_stops').insert(seeds)
  });
};
