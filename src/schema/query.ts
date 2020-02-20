import { queryType, stringArg, arg } from 'nexus'
import { StatusEnum } from './_common'

import { greet } from '@utils'

export const Query = queryType({
  definition(t) {
    t.string('ping', () => 'pong') // Inline Resolver Function (Only Built-in scalar)
    t.field('hello', {
      type: 'String',
      nullable: false,
      resolve: (root, args, ctx) => {
        // return 'Hello World'
        return greet()
      },
    })
    t.field('account', {
      type: 'Account',
      args: {
        name: stringArg(),
        status: arg({ type: StatusEnum }),
      },
      resolve: (root, args, ctx) => {
        return {
          id: 'adsf-dsfds-fdfg-dfg-fdg',
          username: 'Suranart',
          email: 'abc@gmail.com',
        }
      },
    })
  },
})
