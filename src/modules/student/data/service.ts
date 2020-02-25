import { SQLDataSource } from 'datasource-sql'

const MINUTE = 60

export default class StudentService extends SQLDataSource {
  getStudent(id: string): object {
    return this.knex
      .select('*')
      .from('students')
      .where({ id })
      .first()
      .cache(MINUTE)
  }
}
