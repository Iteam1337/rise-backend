import { gql } from 'apollo-server-express'
import { MutationResolvers } from '../__generated__/graphql'
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

const sendAnswers: MutationResolvers['sendAnswers'] = (_parent, { input }) => {
  console.log('sendAnswers: ', input)

  return true
}

export const resolvers = {
  Query: {
    questions: getQuestions,
  },
  Mutation: {
    sendAnswers,
  },
}
