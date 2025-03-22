import { axiosPrivate } from 'apis/axiosConfig'
import { toast } from 'react-toastify'

class AdminApi {
  static instance = axiosPrivate()
  constructor(accessToken) {
    if (!accessToken) {
      toast.error('Bạn chưa đăng nhập')
      return
    }
    if (!this.instance)
      this.instance = axiosPrivate(accessToken)
  }

  createMovie = async (data) => await this.instance.post('admin/movie/create', data)
  updateMovie = async (movieId, data) => await this.instance.put(`admin/movie/${movieId}`, data)
  deleteMovie = async (movieId) => await this.instance.delete(`admin/movie/${movieId}`)

  createManyShowtime = async (data) => await this.instance.post('admin/showtime/create', data)
  updateShowtime = async (showtimeId, data) => await this.instance.put(`admin/showtime/${showtimeId}`, data)
  deleteShowtime = async (showtimeId) => await this.instance.delete(`admin/showtime/${showtimeId}`)

  reportOrders = async () => await this.instance.get('admin/order/report')
}

export default AdminApi
