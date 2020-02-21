import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import {
  makeSchema,
  connectionPlugin,
  nullabilityGuardPlugin,
  queryComplexityPlugin,
} from 'nexus'

import {
  getComplexity,
  simpleEstimator,
  fieldExtensionsEstimator,
} from 'graphql-query-complexity'

import { separateOperations } from 'graphql'

import * as allTypes from '../schema'

const DEBUGGING_CURSOR = false

const fn = DEBUGGING_CURSOR ? (i: string): string => i : undefined

const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(__dirname, 'schema.graphql'),
    typegen: path.join(__dirname, 'generated', 'typeDefs.ts'),
  },
  plugins: [
    queryComplexityPlugin(),
    connectionPlugin({
      encodeCursor: fn,
      decodeCursor: fn,
    }),
    nullabilityGuardPlugin({
      shouldGuard: true,
      fallbackValues: {
        ID: ({ info }): string => `${info.parentType.name}:N/A`,
        String: (): string => '',
        Int: (): number => 0,
        Boolean: (): boolean => false,
      },
    }),
  ],
})

const server = new ApolloServer({
  schema,
  plugins: [
    {
      requestDidStart: () => ({
        didResolveOperation({ request, document }): void {
          const maxComplexity = 100

          const complexity = getComplexity({
            schema,
            query: request.operationName
              ? separateOperations(document)[request.operationName]
              : document,
            variables: request.variables,
            estimators: [
              fieldExtensionsEstimator(),
              simpleEstimator({ defaultComplexity: 1 }),
            ],
          })

          if (complexity >= maxComplexity) {
            throw new Error(
              `Sorry, too complicated query! (Complexity Score: ${complexity}/${maxComplexity})`,
            )
          }
          console.log('Used query complexity points:', complexity)
        },
      }),
    },
  ],
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
