
exports.up = async function(knex) {
  await knex.schema.createTable('project_resources', table => {
      table.increments('project_resources_id')
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')  
  })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
};
