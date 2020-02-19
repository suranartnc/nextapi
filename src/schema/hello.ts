import { objectType } from 'nexus'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('hello', {
      type: 'String',
      nullable: false,
      resolve: (root, args, ctx) => {
        return 'Hello World'
      },
    })
  },
})
