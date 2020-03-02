import Knex from 'knex'

export default Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'postgres',
  },
})
