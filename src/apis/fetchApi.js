import { axiosPublic } from './axiosConfig'

class FetchApi {
  static getCinemas = async () => {
    return await axiosPublic.get('fetch/cinemas')
  }

  static getShowtimes = async () => {
    return await axiosPublic.get('fetch/showtimes')
  }

  static getMovies = async () => {
    return await axiosPublic.get('fetch/movies')
  }
}

export default FetchApi