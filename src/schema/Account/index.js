import { objectType, extendType, stringArg, arg } from 'nexus'
import { Node, StatusEnum } from '@schema/_common'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node)
    t.string('username')
    t.string('email')
  },
})

export const AccountField = extendType({
  type: 'Query',
  definition(t) {
    t.field('account', {
      type: Account,
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
