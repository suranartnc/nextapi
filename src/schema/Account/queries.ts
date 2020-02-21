import { objectType, queryField, stringArg, arg } from 'nexus'
import { Node, StatusEnum } from '@schema/_common'
import { getComplexityForConnection } from '@utils/schema'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node)
    t.string('username')
    t.string('email')
    t.list.field('friends', {
      type: Account,
      resolve(root, args, ctx) {
        return [
          {
            id: 'adsf-dsfds-fdfg-dfg-fdg',
            username: 'Suranart',
            email: 'abc@gmail.com',
          },
          {
            id: 'adsf-dsfds-fdfg-dfg-fdg',
            username: 'Suranart',
            email: 'abc@gmail.com',
          },
        ]
      },
    })
    t.connectionField('friendsConnection', {
      type: Account,
      disableBackwardPagination: true,
      complexity: getComplexityForConnection(),
      nodes() {
        return [
          {
            id: 'adsf-dsfds-fdfg-dfg-fdg',
            username: 'Suranart',
            email: 'abc@gmail.com',
          },
          {
            id: 'adsf-dsfds-fdfg-dfg-fdg',
            username: 'Suranart',
            email: 'abc@gmail.com',
          },
        ]
      },
    })
  },
})

export const AccountQueryField = queryField('account', {
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
