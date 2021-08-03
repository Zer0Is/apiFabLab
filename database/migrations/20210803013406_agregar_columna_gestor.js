
exports.up = function(knex) {
    return knex.schema.table('makers', table => {
      table.string('gestor', 128);
      table.foreign('gestor').references('gestor.rut').onDelete('set null')
    })
  };
  
exports.down = function(knex) {
    return knex.schema.table('makers', table => {
      table.dropColumn('gestor');
    })
  };
