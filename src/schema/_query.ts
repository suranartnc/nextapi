import { queryType } from 'nexus'

import { greet } from '@utils'

export const Query = queryType({
  definition(t) {
    t.string('ping', () => 'pong')

    t.field('hello', {
      type: 'String',
      nullable: false,
      resolve: (root, args, ctx) => {
        // return 'Hello World'
        return greet()
      },
    })
  },
})
