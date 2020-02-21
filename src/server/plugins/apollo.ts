import {
  getComplexity,
  simpleEstimator,
  fieldExtensionsEstimator,
} from 'graphql-query-complexity'

import { separateOperations } from 'graphql'

export function getApolloServerPlugins(schema) {
  return [
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
  ]
}
