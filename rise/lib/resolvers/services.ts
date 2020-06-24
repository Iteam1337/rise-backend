import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { getAllServices } from '../services/riseServices'

export const typeDefs = gql`
  type Service {
    id: String!
    name: String!
    link: String!
    categories: [String!]!
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
    services: () => getAllServices(),
  },
}
