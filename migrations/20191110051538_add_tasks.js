exports.up = function(knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id')
        table.integer('stop_id')
        table.string('type')

        table.foreign('stop_id')
            .references('stops.id')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
};
