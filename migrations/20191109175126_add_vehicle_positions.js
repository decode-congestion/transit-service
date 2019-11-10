exports.up = function(knex) {
    return knex.schema.createTable('vehicle_positions', (table) => {
        table.increments('id')
        table.specificType('point', 'geometry(point, 4326)');
        table.integer('vehicle_no')
        table.datetime('recorded_at')

        table.foreign('vehicle_no')
            .references('vehicles.vehicle_no')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicle_positions')
};
