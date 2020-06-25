import * as auth from '../services/auth'
import { MutationResolvers, AuthPayload } from '../__generated__/graphql'
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

const login: MutationResolvers['login'] = async (
  _parent,
  { input }
): Promise<AuthPayload> => {
  if (input) {
    const { email, password } = input
    const data = await auth.login(email, password)
    return data
  } else {
    throw new Error()
  }
}

const register: MutationResolvers['register'] = async (_parent, { input }) => {
  const { email, password } = input

  if (email) {
    const result = await auth.register(email, password)
    console.log(result)
    return result
  }
}

export const resolvers = {
  Mutation: {
    login,
    register,
  },
}
