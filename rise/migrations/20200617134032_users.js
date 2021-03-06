exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('users', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('email', 128).notNullable()
        table.string('password', 1000).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
      })
    )
    .then((_) => console.log('***users migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users').then()
}
