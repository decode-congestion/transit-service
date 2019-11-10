exports.up = function(knex) {
    return knex.schema.createTable('vehicles', (table) => {
        table.increments('id')
        table.integer('vehicle_no').unique()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('vehicles')
};
