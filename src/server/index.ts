import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeSchema } from 'nexus'

import MovieService from '@services/movie'

import * as allTypes from '@schema'
import schemaPlugins from './plugins/schema'
import { getApolloServerPlugins } from './plugins/apollo'

const movieModel = [
  {
    id: '1',
    title: 'Joker',
  },
  {
    id: '2',
    title: 'Batman',
  },
]

const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(process.cwd(), 'src', 'schema.graphql'),
    typegen: path.join(process.cwd(), 'src/generated', 'typeDefs.ts'),
  },
  plugins: schemaPlugins,
})

const server = new ApolloServer({
  schema,
  plugins: getApolloServerPlugins(schema),
  dataSources: () => ({
    movieService: new MovieService(movieModel),
  }),
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
