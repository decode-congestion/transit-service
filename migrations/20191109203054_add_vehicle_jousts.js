exports.up = function(knex) {
    return knex.schema.createTable('vehicle_jousts', (table) => {
        table.increments('id')
        table.integer('vehicle_id')
        table.integer('joust_id')

        table.foreign('vehicle_id')
            .references('vehicles.id')
            .onDelete('CASCADE')
        table.foreign('joust_id')
            .references('users.id')
            .onDelete('CASCADE')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicle_jousts')
};
