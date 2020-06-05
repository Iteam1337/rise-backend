exports.seed = function(knex) {
  return knex('services')
    .del()
    .then(async function() {
      return knex.raw(
        `INSERT INTO "services"
          (
            "name",
            "contact",
            "link",
            "categories"
          )
        VALUES
          (
            'Tjejjouren',
            'hi@tjejjouren.se',
            'https://tjejjouren.se',
            '{548f509f-a571-4b20-90b3-b4e6d5502e25, 63c43b70-ed11-4247-9146-f68c91e8f2c2}'
          ),
          (
            '29k',
            'contact@29k.org',
            'https://29k.org',
            '{63c43b70-ed11-4247-9146-f68c91e8f2c2, 066167db-bd1b-4002-850a-9c0c3571375a}'
          ),
          (
            'Headspace',
            'hi@headspace.com',
            'https://headspace.com',
            '{066167db-bd1b-4002-850a-9c0c3571375a}'
          ),
          (
            'Abba',
            'hi@abba.com',
            'https://abba.com',
            '{bf3f0bf6-b86c-49e0-96fe-d5b89e1a79c3}'
          ),
          (
            'Lifesum',
            'hi@lifesum.com',
            'https://lifesum.com',
            '{bf3f0bf6-b86c-49e0-96fe-d5b89e1a79c3, 8c69720a-84f6-4411-8a56-87be0655dda8}'
          )
          `
      )
    })
}