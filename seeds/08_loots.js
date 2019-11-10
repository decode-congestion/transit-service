
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('loots').del()
    .then(function () {
      // Inserts seed entries
      return knex('loots').insert([
        {id: 1, type: 1, sprite: 1, modifier: 5, name: 'Helmet of Shielding', vehicle_id: 1, user_id: 1},
        {id: 2, type: 2, sprite: 2, modifier: 15, name: 'Leather Armour', vehicle_id: undefined, user_id: 2},
        {id: 3, type: 5, sprite: 3, modifier: 10, name: 'Big Boots!', vehicle_id: 1, user_id: 3},
        {id: 4, type: 6, sprite: 2, modifier: 12, name: 'Shield of Protection', vehicle_id: undefined, user_id: 1},
        {id: 5, type: 4, sprite: 1, modifier: 5, name: 'Stone Legs', vehicle_id: 1, user_id: 2},
        {id: 6, type: 3, sprite: 2, modifier: 7, name: 'Gucci Gloves', vehicle_id: 0, user_id: 1},
      ]);
    });
};