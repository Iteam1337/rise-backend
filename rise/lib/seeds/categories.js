exports.seed = function(knex) {
  return knex('categories')
    .del()
    .then(async function() {
      return knex.raw(
        `INSERT INTO
          "categories" ("id", "label")
            VALUES
          ('bf3f0bf6-b86c-49e0-96fe-d5b89e1a79c3', 'Träning'),
          ('99596c21-37f8-47f8-a6dc-e747556a6e7e', 'Relationer'),
          ('548f509f-a571-4b20-90b3-b4e6d5502e25', 'Stress'),
          ('63c43b70-ed11-4247-9146-f68c91e8f2c2', 'Ångest'),
          ('b8f0f96b-3156-4394-8144-f909573038fb', 'Våld'),
          ('8c69720a-84f6-4411-8a56-87be0655dda8', 'Kost'),
          ('066167db-bd1b-4002-850a-9c0c3571375a', 'Mindfulness')`
      )
    })
}