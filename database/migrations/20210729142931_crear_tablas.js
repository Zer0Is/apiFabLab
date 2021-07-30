
exports.up = function(knex) {
    return knex.schema.createTable('makers', (table) => {
        // Incremental id
        table.increments('id').primary();
        table.string('rut').notNullable();
        table.string('categoria').notNullable();
        table.string('nombre').notNullable();
        table.string('carrera').notNullable();
        table.string('campus').notNullable();
        table.string('rango');
        table.unique(['rut', 'categoria']);
      })
      .createTable('gestor', (table) => {
        // Incremental id
        table.string('rut').notNullable().primary();
        table.string('nombre').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('makers')
    .dropTable('gestor');
};
