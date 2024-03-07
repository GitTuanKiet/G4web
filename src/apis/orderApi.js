import { axiosPrivate } from './axiosConfig'

class OrderApi {
  static createOrder = async (payment, order) => {
    let testpayment = 'paypal'
    const res = await axiosPrivate.post(`payment/${testpayment}/create`, order)
    window.location.href = res.data.link
  }

  static checkOrder = async (payment, token) => {
    let testpayment = 'paypal'
    return await axiosPrivate.get(`payment/${testpayment}/check/${token}`)
  }

  static cancelOrder = async (payment, token) => {
    let testpayment = 'paypal'
    return await axiosPrivate.get(`payment/${testpayment}/cancel/${token}`)
  }
}

export default OrderApi