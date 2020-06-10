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
        table.string('label', 255).notNullable()
        table.string('introduction', 255).notNullable()
        table.string('information', 2000).notNullable()
      })
    )
    .then((_) => console.log('***categories migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('categories').then()
}
