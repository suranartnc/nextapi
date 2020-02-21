import { queryField, stringArg, arg } from 'nexus'
import { StatusEnum } from '@schema/_common'

export const AccountQueryField = queryField('account', {
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
