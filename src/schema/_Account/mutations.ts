import { mutationField, stringArg } from 'nexus'
// import { Account } from '@schema/Account/queries'

export const createUser = mutationField('createUser', {
  type: 'Account',
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
