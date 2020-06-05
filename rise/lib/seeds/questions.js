exports.seed = function(knex) {
  return knex('questions')
    .del()
    .then(async function() {
      return knex.raw(
        `INSERT INTO
          "questions" ("id", "question")
            VALUES
          ('e91c59ef-ca0d-467a-85fa-4b006a7f9544', 'Hur mår du'),
          ('fd8f3573-4774-4e68-b878-3802fc5c8e54', 'Har appen du använt fått dig att må bättre'),
          ('cdcb7aff-d090-43de-8276-6be54cd1fdb3', 'Hur hög är din stressnivå'),
          ('70bfdd5d-5a89-416c-b4ac-6bfaa4f37616', 'Vad har appen hjälpt dig med'),
          ('d7409caf-9443-48ea-8e3b-58a1c7627c83', 'Hur ofta har du använt appen'),
          ('6418124c-5188-446d-97a0-12a8047958b9', 'Skulle du rekommendera appen till en vän'),
          ('ed3d44d7-cc71-4c98-98f9-08188494c2b0', 'Vad ger du appen i betyg')`
      )
    })
}
