import { gql } from 'apollo-server-express'
import { QueryResolvers, MutationResolvers } from '../__generated__/graphql'
import { getQuestions } from '../services/questions'

export const typeDefs = gql`
  type Question {
    id: String!
    question: String!
  }

  input Answer {
    id: String!
    text: String!
  }

  input Answers {
    Answers: [Answer]
  }

  extend type Mutation {
    sendAnswers(input: Answers!): Boolean!
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
    sendAnswers: (_, { input }) => {
      console.log(input)

      return true
    },
  },
}
