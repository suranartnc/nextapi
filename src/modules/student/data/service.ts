import { DataSource } from 'apollo-datasource'
import Student from '@modules/student/data/model/Student'
import Assignment from '@modules/student/data/model/Assignment'

export default class StudentService extends DataSource {
  initialize({ context } = {}): void {
    this.context = context
  }

  getStudent(id: string): object {
    return Student.query().findOne({ id })
  }

  getAssignments(studentId: string): any {
    if (!studentId) {
      return null
    }

    return Assignment.query().where({ student_id: studentId })
  }

  async createStudent(data) {
    const { fname, lname } = data

    const response = await Student.query().insert({
      fname,
      lname,
    })

    return response
  }

  async deleteStudent(id: string): object {
    await Student.relatedQuery('assignments')
      .for(id)
      .delete()

    await Student.query().deleteById(id)

    return {
      id,
    }
  }
}
