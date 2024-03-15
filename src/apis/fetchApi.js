import { axiosPublic } from './axiosConfig'

class FetchApi {
  static instance = axiosPublic()

  static getCinemas = async () => await this.instance.get('fetch/cinemas')
  static getShowtimes = async () => await this.instance.get('fetch/showtimes')
  static getMovies = async () => await this.instance.get('fetch/movies')
}

export default FetchApi