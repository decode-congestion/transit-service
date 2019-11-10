exports.up = function(knex) {
    return knex.schema.createTable('riders', (table) => {
        table.increments('id')
        table.integer('vehicle_id')
        table.integer('user_id')

        table.foreign('vehicle_id')
            .references('vehicles.id')
            .onDelete('CASCADE')
        table.foreign('user_id')
            .references('users.id')
            .onDelete('CASCADE')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('riders')
};
