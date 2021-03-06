exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('questions', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('question', 1000).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
      })
    )
    .then((_) => console.log('***questions migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('questions').then()
}
