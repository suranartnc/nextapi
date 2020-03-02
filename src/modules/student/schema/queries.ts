import { queryField, intArg } from 'nexus'

export const StudentQueryField = queryField('student', {
  type: 'Student',
  args: {
    id: intArg(),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.getStudent(args.id)
  },
})
