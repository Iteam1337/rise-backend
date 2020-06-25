import { gql } from 'apollo-server-express'
import { getQuestions, saveAnswers, latestAnswerByUser } from '../services/questions'

export const typeDefs = gql`
  type Question {
    id: String!
    question: String!
  }

  input Answer {
    text: String!
    id: String!
  }

  input Answers {
    answers: [Answer]
    user: String!
  }

  type latestAnswerResponse {
    createdAt: String!
    user: String!
  }

  extend type Mutation {
    sendAnswers(input: Answers!): Boolean!
    latestAnswer(id: String!): latestAnswerResponse
  }

  extend type Query {
    questions: [Question!]!
  }
`


export const resolvers = {
  Query: {
    questions: getQuestions,
  },
  Mutation: {
    sendAnswers: async (_ : any, { input: { answers, user } } : any) => {
      await saveAnswers(user, answers)

      return true
    },
    latestAnswer: async (_ : any, { id } : { id: string }) => latestAnswerByUser(id)
  },
}
