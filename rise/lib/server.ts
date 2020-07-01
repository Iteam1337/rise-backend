import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
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
  typeDefs as articleDefs,
  resolvers as articleResolvers,
} from './resolvers/articles'

import {
  typeDefs as authDefs,
  resolvers as authResolvers
} from './resolvers/auth'

import {
  typeDefs as serviceDefs,
  resolvers as serviceResolvers
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
  typeDefs: [typeDefs, questionDefs, categoryDefs, authDefs, articleDefs, serviceDefs],
  resolvers: merge([questionResolvers, categoryResolvers, authResolvers, articleResolvers, serviceResolvers]),
})

const app = express()

app.use(cors())
app.use(bodyParser.json())

const validateUserToken = (token: string) => token.startsWith('OK')

app.post('/api/registration/:app_id', (req, res) => {
  const {
    body: { token: userToken },
  } = req

  console.log('UserToken:', userToken)

  res.status(200).json({
    status: 'success',
    data: true,
  })
})

app.get('/api/token/:id', (req, res) => {
  if (validateUserToken(req.params && req.params.id)) {
    res.status(200).json({
      status: 'success',
      data: true,
    })
  } else {
    res.status(401).json({
      status: 'error',
      data: false,
    })
  }
})

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
