exports.up = (knex) => {
  return knex
    .raw('create extension if not exists "uuid-ossp"')
    .then((_) =>
      knex.schema.createTable('articles', (table) => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'))
        table.specificType('categories', 'UUID[]')
        table.enu('type', ['video', 'image', 'plain'])
        table.string('url', 255).notNullable()
        table.string('video_url', 255).notNullable()
        table.string('img_url', 255).notNullable()
        table.string('title', 255).notNullable()
        table.string('introduction', 255).notNullable()
        table.string('text', 2000).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
      })
    )
    .then((_) => console.log('***articles migration OK!***'))
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('articles').then()
}
