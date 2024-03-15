import { axiosPrivate } from 'apis/axiosConfig'
import { toast } from 'react-toastify'
let testpayment = 'paypal'

class OrderApi {
  static instance = axiosPrivate()
  constructor(accessToken) {
    if (!accessToken) {
      toast.error('Bạn chưa đăng nhập')
      return
    }
    if (!this.instance)
      this.instance = axiosPrivate(accessToken)
  }

  createOrder = async (method, order) => await this.instance.post(`payment/${testpayment}/create`, order)
  checkOrder = async (orderId) => await this.instance.get(`payment/${testpayment}/check/${orderId}`)
  cancelOrder = async (orderId) => await this.instance.get(`payment/${testpayment}/cancel/${orderId}`)
}

export default OrderApi