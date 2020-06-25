import { gql } from 'apollo-server-express'
import { getAllServices } from '../services/riseServices'

export const typeDefs = gql`
  extend type Query {
    services: [Service!]!
  }
`

export const resolvers = {
  Query: {
    services: getAllServices,
  },
}
