import { gql } from 'apollo-server-express'
import { QueryResolvers, MutationResolvers } from '../__generated__/graphql'
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

interface Resolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
}

export const resolvers: Resolvers = {
  Query: {
    questions: () => getQuestions()
  },
  Mutation: {
    sendAnswers: async (_, { input: { answers, user } }) => {
      await saveAnswers(user, answers)

      return true
    },
    latestAnswer: async (_, { id }) => latestAnswerByUser(id)
  },
}
