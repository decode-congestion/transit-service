exports.up = function(knex) {
    return knex.schema.createTable('vehicles', (table) => {
        table.increments('id')
        table.string('vehicle_no')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicles')
};
