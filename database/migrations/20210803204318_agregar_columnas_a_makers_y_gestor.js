
exports.up = function(knex) {
    return knex.schema.table('makers', table => {
        table.string('correo', 128);
        table.string('institucion', 128);
    })
    .table('gestor', table => {
        table.string('correo', 128);
    })
  };
  
exports.down = function(knex) {
    return knex.schema.table('makers', table => {
      table.dropColumn('correo');
      table.dropColumn('institucion');
    })
    .table('gestor', table =>{
        table.dropColumn('correo');
    })
  };
