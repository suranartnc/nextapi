import { objectType, interfaceType, enumType, stringArg, arg } from 'nexus'
import { greet } from '@utils'

export const Query = objectType({
  name: 'Query',
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
        status: arg({ type: 'StatusEnum' }),
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

export const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', { description: 'Unique identifier for the resource' })
    t.resolveType(() => null)
  },
})

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node) // or t.implements("Node")
    t.string('username')
    t.string('email')
  },
})

export const StatusEnum = enumType({
  name: 'StatusEnum',
  members: ['ACTIVE', 'DISABLED'],
})
