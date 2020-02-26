import { Model } from 'objection'
import Student from './Student'
import PostgresConnector from '@server/connectors/postgres'

Model.knex(PostgresConnector)

export default class Assignment extends Model {
  static get tableName(): string {
    return 'assignments'
  }

  static get relationMappings(): object {
    return {
      assignee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'assignments.student_id',
          to: 'students.id',
        },
      },
    }
  }
}
