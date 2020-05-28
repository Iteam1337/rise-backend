import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import {
  typeDefs as questionDefs,
  resolvers as questionResolvers,
} from './resolvers/questions'
import {
  typeDefs as categoryDefs,
  resolvers as categoryResolvers,
} from './resolvers/categories'
import {
  typeDefs as serviceDefs,
  resolvers as serviceResolvers,
} from './resolvers/services'

import merge from 'lodash.merge'
import http from 'http'

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`

const server = new ApolloServer({
  typeDefs: [typeDefs, questionDefs, categoryDefs, serviceDefs],
  resolvers: merge([questionResolvers, categoryResolvers, serviceResolvers]),
})

const app = express()

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
