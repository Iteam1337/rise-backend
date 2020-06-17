exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('answers', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('question', 128).notNullable()
        table.string('answer', 1000).notNullable()
        table.string('user', 128).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
      })
    )
    .then((_) => console.log('***answers migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('answers').then()
}
