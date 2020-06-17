import * as auth from '../services/auth'
import { QueryResolvers, MutationResolvers } from '../__generated__/graphql'
import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type AuthPayload {
    id: ID!
    token: String!
    email: String!
  }
  type LogoutResponse {
    status: String!
    message: String!
  }
  input userInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    login(input: userInput): AuthPayload!
    register(input: userInput!): AuthPayload!
  }
`


interface Resolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
}

export const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { input } : any) => {
     const { email, password } = input
     const data = await auth.login(email, password)
     return data
    },
    register: async (_, { input }: any) => {
      const { email, password } = input

      if (email) {
          const result = await auth.register(email,password)
          console.log(result)
          return result
      }
    }
  }
}
