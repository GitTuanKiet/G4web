import { axiosPrivate } from './axiosConfig'

class OrderApi {
  static createOrder = async (payment = 'paypal', order) => {
    const res = await axiosPrivate.post(`payment/${payment}/create`, order)
    window.location.href = res.data.link
  }

  static checkOrder = async (payment = 'paypal', token) => {
    return await axiosPrivate.get(`payment/${payment}/check/${token}`)
  }

  static cancelOrder = async (payment = 'paypal', token) => {
    return await axiosPrivate.get(`payment/${payment}/cancel/${token}`)
  }
}

export default OrderApi