
exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name').notNullable
      table.string('resource_description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
