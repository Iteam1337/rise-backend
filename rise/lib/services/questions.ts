import { db } from '../adapters/postgres'
import dedent from 'dedent'
import { QueryResolvers } from '../__generated__/graphql'

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
