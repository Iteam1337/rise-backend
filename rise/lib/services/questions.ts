import { db, pgp } from '../adapters/postgres'
import dedent from 'dedent'
import camelcaseKeys from 'camelcase-keys'
import { QueryResolvers, Answer } from '../__generated__/graphql'

export const getQuestions: QueryResolvers['questions'] = async () => {
  return await db.manyOrNone(
    dedent`
    SELECT
      id,
      question
    FROM questions
  `
  )
}

export async function latestAnswerByUser(id: string): Promise<Answer | null> {
  const data = await db.one(
    dedent`
    SELECT a.user, a.created_at
     FROM answers a
     WHERE a.user = $1 ORDER BY a.created_at desc LIMIT 1
    `,
    [id]
  )

  return camelcaseKeys(data)
}

export async function saveAnswers(id: string, answers: any): Promise<any[]> {
  const query = pgp.helpers.insert(
    answers.map((item: any) => ({ question: item.id, answer: item.text, user: id })),
    ['user', 'question', 'answer'],
    'answers'
  )


  return db
    .one(query)
    .then(user => {
      console.log(user)
      return user
    })
    .catch(e => {
      console.log(e)
      return e
    })
}
