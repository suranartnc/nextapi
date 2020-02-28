import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeSchema } from 'nexus'

import config from '@config'
import mongooseConnector from '@server/connectors/mongodb'

import MovieService from '@modules/movie/data/service'
import StudentService from '@modules/student/data/service'

import * as allTypes from '@modules/global/schema'

import nexusPlugins from '@server/plugins/nexus'
import { getApolloServerPlugins } from '@server/plugins/apollo'
import { applyMiddleware } from '@server/plugins/middlewares'

const mongoose = mongooseConnector(config.mongoConnectionString)

const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(process.cwd(), 'src', 'schema.graphql'),
    typegen: path.join(process.cwd(), 'src/generated', 'typeDefs.ts'),
  },
  plugins: nexusPlugins,
})

const server = new ApolloServer({
  schema: applyMiddleware(schema),
  context: ({ req }) => {
    let user = null

    if (req.user) {
      user = req.user
    }
    return {
      user,
    }
  },
  dataSources: () => {
    return {
      movieService: new MovieService(mongoose.model('Movie')),
      studentService: new StudentService(),
    }
  },
  plugins: getApolloServerPlugins(schema),
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
