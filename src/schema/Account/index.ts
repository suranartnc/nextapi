import { objectType, queryField, mutationField, stringArg, arg } from 'nexus'
import { Node, StatusEnum } from '@schema/_common'
import { uniqueId } from 'lodash'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node)
    t.string('username')
    t.string('email')
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

export const createUser = mutationField('createUser', {
  type: Account,
  args: {
    username: stringArg(),
    email: stringArg(),
  },
  resolve(root, args, ctx) {
    return {
      id: 'adsf-dsfds-fdfg-dfg-fdg',
      username: 'Suranart',
      email: 'abc@gmail.com',
    }
  },
})
