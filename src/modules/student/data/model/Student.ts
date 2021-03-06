import { Model } from 'objection'
import Assignment from './Assignment'
import PostgresConnector from '@server/connectors/postgres'

Model.knex(PostgresConnector)

export default class Student extends Model {
  static get tableName(): string {
    return 'students'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['fname', 'lname'],
      properties: {
        id: { type: 'integer' },
        fname: { type: 'string', minLength: 1, maxLength: 255 },
        lname: { type: 'string', minLength: 1, maxLength: 255 },
      },
    }
  }

  static get relationMappings(): object {
    return {
      assignments: {
        relation: Model.HasManyRelation,
        modelClass: Assignment,
        join: {
          from: 'students.id',
          to: 'assignments.student_id',
        },
      },
    }
  }
}
