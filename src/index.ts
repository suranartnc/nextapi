import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { makeSchema } from 'nexus'

import * as allTypes from './schema'

const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(__dirname, 'schema.graphql'),
    typegen: path.join(__dirname, 'generated', 'typeDefs.ts'),
  },
})

const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
