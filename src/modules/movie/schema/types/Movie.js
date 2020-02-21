import { objectType } from 'nexus'
import { Node } from '@modules/global/schema/_common'

export const MovieType = objectType({
  name: 'Movie',
  definition(t) {
    t.implements(Node)
    t.string('title')
  },
})
