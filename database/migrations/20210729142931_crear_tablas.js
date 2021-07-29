
exports.up = function(knex) {
    return knex.schema.createTable('makers', (table) => {
        // Incremental id
        table.string('rut');
        table.string('categoria');
        table.string('nombre').notNullable();
        table.string('carrera').notNullable();
        table.string('campus').notNullable();
        table.string('rango');
        // created_at and updated_at
        table.timestamps();
        table.primary(['rut', 'categoria']);
      })
      .createTable('gestor', (table) => {
        // Incremental id
        table.string('rut').notNullable().primary();
        table.string('nombre').notNullable();
        // created_at and updated_at
        table.timestamps();
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('makers')
    .dropTable('gestor');
};
