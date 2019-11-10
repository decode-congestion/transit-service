
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, stop_id: 1, type: 'people'},
        {id: 2, stop_id: 5, type: 'bikes'},
        {id: 3, stop_id: 2, type: 'cars'},
        {id: 4, stop_id: 3, type: 'cars'},
        {id: 5, stop_id: 10, type: 'people'},
      ]);
    });
};


/*
        table.increments('id')
        table.integer('stop_id')
        table.string('type')
*/