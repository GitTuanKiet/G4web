import { axiosPrivate } from 'apis/axiosConfig'
let testpayment = 'paypal'

class OrderApi {
  static instance = axiosPrivate()
  constructor(accessToken) {
    if (!accessToken) throw new Error('Bạn cần phải đăng nhập')
    if (!this.instance)
      this.instance = axiosPrivate(accessToken)
  }

  createOrder = async (method, order) => await this.instance.post(`payment/${testpayment}/create`, order)
  checkOrder = async (orderId) => await this.instance.get(`payment/${testpayment}/check/${orderId}`)
  cancelOrder = async (orderId) => await this.instance.get(`payment/${testpayment}/cancel/${orderId}`)
}

export default OrderApi