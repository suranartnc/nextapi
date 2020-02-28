import { applyMiddleware as applyGQLMiddleware } from 'graphql-middleware'

const middlewares = []

export function applyMiddleware(schema) {
  return applyGQLMiddleware(schema, ...middlewares)
}
