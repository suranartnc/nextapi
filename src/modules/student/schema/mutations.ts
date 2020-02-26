import { mutationField, intArg } from 'nexus'

export const StudentMutationField = mutationField('deleteStudent', {
  type: 'Student',
  args: {
    id: intArg(),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.deleteStudent(args.id)
  },
})
