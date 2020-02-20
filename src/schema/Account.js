import { objectType } from 'nexus'
import { Node } from './_common'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.implements(Node)
    t.string('username')
    t.string('email')
  },
})
