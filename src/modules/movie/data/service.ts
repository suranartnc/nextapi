import { DataSource } from 'apollo-datasource'

export default class MovieService extends DataSource {
  constructor(model) {
    super()
    this.model = model
  }

  initialize({ context } = {}): void {
    this.context = context
  }

  getMovie(id) {
    return this.model.find(movie => movie.id === id)
  }
}
