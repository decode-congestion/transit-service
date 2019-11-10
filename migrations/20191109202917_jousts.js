exports.up = function(knex) {
    return knex.schema.createTable('jousts', (table) => {
        table.increments('id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('jousts')
};
