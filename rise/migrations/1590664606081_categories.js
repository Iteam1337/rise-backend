exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('categories', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('label', 1000).notNullable()
      })
    )
    .then((_) => console.log('***categories migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('categories').then()
}
