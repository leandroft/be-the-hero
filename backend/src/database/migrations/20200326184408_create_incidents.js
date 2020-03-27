
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // Chave primária auto-increment
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); // Número do tipo float

        table.string('ong_id').notNullable(); // Chave de ligção com a tabela "create_ong"

        table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira com a tabela "create_ong"
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
