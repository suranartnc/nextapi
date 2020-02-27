import { queryField, objectType, intArg } from 'nexus'

export const StudentType = objectType({
  name: 'Student',
  definition(t) {
    t.int('id')
    t.string('fname')
    t.string('lname')
    t.list.field('assignments', {
      type: 'Assignment',
      authorize: (root, args, ctx) => {
        return ctx.user !== null
      },
      resolve: (root, args, { dataSources: { studentService } }) => {
        return studentService.getAssignments(root.id)
      },
    })
  },
})

export const AssignmentType = objectType({
  name: 'Assignment',
  definition(t) {
    t.int('id')
    t.int('student_id')
    t.string('title')
    t.int('grade')
  },
})

export const StudentQueryField = queryField('student', {
  type: 'Student',
  args: {
    id: intArg(),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.getStudent(args.id)
  },
})
