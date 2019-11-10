
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('riders').del()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {id: 1, vehicle_id: 1, user_id: 1},
      ]);
    });
};
