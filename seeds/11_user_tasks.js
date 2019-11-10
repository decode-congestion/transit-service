
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_tasks').insert([
        // {id: 1, task_id: 1, user_id: 1, status: 'PENDING', type: 'PED', result: null, completed_at: null},
      ]);
    });
};
