exports.up = function(knex) {
    return knex.schema.createTable('user_tasks', (table) => {
        table.increments('id')
        table.integer('task_id')
        table.integer('user_id')
        table.string('status') // PENDING, ACCEPTED, COMPLETE
        table.string('type') // PED, BYC, CAR
        table.integer('result')
        table.datetime('completed_at')

        table.foreign('task_id')
            .references('tasks.id')
            .onDelete('CASCADE')

        table.foreign('user_id')
            .references('users.id')
            .onDelete('CASCADE')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_tasks')
};
