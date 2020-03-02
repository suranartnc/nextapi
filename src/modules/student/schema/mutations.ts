import { mutationField, intArg, inputObjectType } from 'nexus'

export const createStudentMutationField = mutationField('createStudent', {
  type: 'Student',
  args: {
    input: inputObjectType({
      name: 'createStudentInput',
      definition(t) {
        t.string('fname', { required: true })
        t.string('lname', { required: true })
      },
    }),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.createStudent(args.input)
  },
})

export const deleteStudentMutationField = mutationField('deleteStudent', {
  type: 'Student',
  args: {
    id: intArg(),
  },
  resolve: (root, args, { dataSources: { studentService } }) => {
    return studentService.deleteStudent(args.id)
  },
})
