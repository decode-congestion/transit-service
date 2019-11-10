
exports.up = function(knex) {
    return knex.schema.createTable('routes_stops', (table) => {
        table.increments('id')
        table.integer('route_id')
        
        table.integer('stop_id')

        table.foreign('route_id')
            .references('routes.id')
            .onDelete('CASCADE')
        table.foreign('stop_id')
            .references('stops.id')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('routes_stops')
};
