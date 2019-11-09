
exports.up = function(knex) {

    return knex.schema.createTable('stops', (table) => {
        table.increments('id')
        table.string('stop_no')

        table.specificType('point', 'geometry(point, 4326)');
    })
};

exports.down = function(knex) {
  
};
