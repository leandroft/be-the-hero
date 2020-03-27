
/**Método "up" é responsável pela criação da tabela */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary(); // Define "id" como chave primária da tabela
      table.string('name').notNullable(); // Campo não pode ser nulo 
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // Campo terá dois caracteres
  })
};

/**Método "down" serve para voltar atrás se ocorrer algum problema (deletar a tabela) */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
