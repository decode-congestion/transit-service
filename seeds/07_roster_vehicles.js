
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roster_vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roster_vehicles').insert([
        {id: 1, vehicle_id: 0, user_id: 1},
        {id: 2, vehicle_id: 1, user_id: 1},
        {id: 4, vehicle_id: 1, user_id: 2},
        {id: 5, vehicle_id: 1, user_id: 3},
        {id: 6, vehicle_id: 3, user_id: 3},
      ]);
    });
};
