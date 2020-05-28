import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { mockServices } from '../mocks'

export const typeDefs = gql`
  type Service {
    id: String!
    name: String!
    link: String!
    categories: [Category!]!
  }

  extend type Query {
    services: [Service!]!
  }
`

interface Resolvers {
  Query: QueryResolvers
}

export const resolvers: Resolvers = {
  Query: {
    services: () => mockServices,
  },
}
