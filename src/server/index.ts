import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeSchema } from 'nexus'

import movieModel from '@modules/movie/data/model'
import MovieService from '@modules/movie/data/service'

import * as allTypes from '@modules/global/schema'
import schemaPlugins from '@server/plugins/schema'
import { getApolloServerPlugins } from '@server/plugins/apollo'

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
  context: ({ req }) => {
    let user
    if (req.user) {
      user = req.user
    }
    return {
      user,
    }
  },
  dataSources: () => {
    return {
      movieService: new MovieService(movieModel),
    }
  },
  plugins: getApolloServerPlugins(schema),
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
