
exports.up = function(knex) {
    return knex.schema.createTable('stops', (table) => {
        table.increments('id')
        // table.string('route_no')
        // table.string('name')
        // table.string('direction')
        // table.string('destination')
    })
};

exports.down = function(knex) {
  
};
