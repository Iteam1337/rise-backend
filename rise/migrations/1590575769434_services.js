exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('services', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name', 1000).notNullable()
        table.string('contact', 128).notNullable()
        table.string('link', 128).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
      })
    )
    .then((_) => console.log('***services migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('services').then()
}
