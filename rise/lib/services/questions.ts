import { db } from '../adapters/postgres'
import dedent from 'dedent'


export async function getQuestions(): Promise<any[]> {
  return await db.manyOrNone(
    dedent`
    SELECT
      id,
      question
    FROM questions
  `)
}
