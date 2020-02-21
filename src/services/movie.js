export default class MovieService {
  constructor(model) {
    this.model = model
  }

  getMovie(id) {
    return this.model.find(movie => movie.id === id)
  }
}
