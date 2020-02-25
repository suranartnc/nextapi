import { queryField, objectType, stringArg } from 'nexus'
import { Node } from '@modules/global/schema/_common'

export const StudentType = objectType({
  name: 'Student',
  definition(t) {
    t.implements(Node)
    t.string('fname')
    t.string('lname')
  },
})

export const StudentQueryField = queryField('student', {
  type: 'Student',
  args: {
    id: stringArg(),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.getStudent(args.id)
  },
})
