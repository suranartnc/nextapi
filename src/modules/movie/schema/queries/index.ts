import { queryField, stringArg } from 'nexus'

export const MovieQueryField = queryField('movie', {
  type: 'Movie',
  args: {
    id: stringArg(),
  },
  resolve: (root, args, { dataSources: { movieService } }) => {
    return movieService.getMovie(args.id)
  },
})
