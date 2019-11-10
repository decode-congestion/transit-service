exports.up = function(knex) {
    return knex.schema.createTable('vehicle_positions', (table) => {
        table.increments('id')
        table.specificType('point', 'geometry(point, 4326)');
        table.integer('vehicle_id')
        table.datetime('recorded_at')

        table.foreign('vehicle_id')
            .references('vehicles.id')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicle_positions')
};
