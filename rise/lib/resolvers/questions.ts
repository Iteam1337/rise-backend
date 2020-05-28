import { gql } from 'apollo-server-express'
import { QueryResolvers, MutationResolvers } from '../__generated__/graphql'

export const typeDefs = gql`
  type Question {
    id: String!
    text: String!
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
    questions: () => [
      {
        id: '1337-1337-1337',
        text: 'Jag undrar vad du äter',
      },
    ],
  },
  Mutation: {
    sendAnswers: (_, { input }) => {
      console.log(input)

      return true
    },
  },
}
