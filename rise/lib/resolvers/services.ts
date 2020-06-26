import { gql } from 'apollo-server-express'
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

export const resolvers = {
  Query: {
    services: getAllServices,
  },
}
