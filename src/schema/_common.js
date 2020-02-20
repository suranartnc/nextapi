import { interfaceType, enumType } from 'nexus'

export const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', { description: 'Unique identifier for the resource' })
    t.resolveType(() => null)
  },
})

export const StatusEnum = enumType({
  name: 'StatusEnum',
  members: ['ACTIVE', 'DISABLED'],
})
