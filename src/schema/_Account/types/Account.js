import { objectType } from 'nexus'
import { Node } from '@schema/_common'
import { getComplexityForConnection } from '@utils/schema'

export const AccountType = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node)
    t.string('username')
    t.string('email')
    t.list.field('friends', {
      type: 'Account',
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
      type: 'Account',
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
