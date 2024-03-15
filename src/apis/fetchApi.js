import { axiosPublic } from './axiosConfig'

class FetchApi {
  static instance = axiosPublic()

  static getCinemas = async () => await this.instance.get('fetch/cinemas')
  static getTheaters = async () => await this.instance.get('fetch/theaters')
  static getShowtimes = async () => await this.instance.get('fetch/showtimes')
  static getMovies = async () => await this.instance.get('fetch/movies')
}

export default FetchApi