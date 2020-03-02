import { plugin } from 'nexus'

export default plugin({
  name: 'LogMutationTimePlugin',
  onCreateFieldResolver(config) {
    if (config.parentTypeConfig.name !== 'Mutation') {
      return
    }

    return async (root, args, ctx, info, next) => {
      const startTimeMs = new Date().valueOf()
      const value = await next(root, args, ctx, info)
      const endTimeMs = new Date().valueOf()

      console.log(
        `Mutation: ${info.operation.name.value} took ${endTimeMs -
          startTimeMs} ms`,
      )

      return value
    }
  },
})
