import { mutationField, stringArg } from 'nexus'

export const createMovie = mutationField('createMovie', {
  type: 'Movie',
  args: {
    username: stringArg(),
    email: stringArg(),
  },
  resolve(root, args, ctx) {
    return {
      id: '3',
      title: 'Robin',
    }
  },
})
