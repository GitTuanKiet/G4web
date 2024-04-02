import { createSlice } from '@reduxjs/toolkit'
import { CONSTANT } from 'utils/constant'

const initialState = {
  loading: false,
  error: null,
  method: 'paypal',
  payment: {
    order: null,
    name: '',
    description: '',
    currency: 'USD',
    price: 0,
    return_url: CONSTANT.return_url
  }
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    clearPayment() { return initialState },
    setMethod: (state, action) => { state.method = action.payload },
    setPayment: (state, action) => { state.payment = { ...state.payment, ...action.payload } },
    setName: (state, action) => {
      const { order } = action.payload
      let name = ''
      switch (order) {
      case 'ticket':
        name = 'Vé xem phim'
        break
      case 'voucher':
        name = 'Voucher'
        break
      case 'gift':
        name = 'Quà tặng'
        break
      default:
        name = ''
      }
      state.payment.name = name
    },
    setDescription: (state, action) => { state.payment.description = state.payment.description + action.payload },
    paymentLoading: (state) => { state.loading = true },
    paymentSuccess: (state) => { state.loading = false; state.error = null },
    paymentError: (state, action) => { state.error = action.payload, state.loading = false },
    paymentFinish: (state) => { state.loading = false },
    createOrder: () => { },
    captureOrder: () => { },
    paymentClear: (state) => { state.error = null }
  }
})

export const {
  clearPayment,
  setMethod,
  setPayment,
  setName,
  setDescription,
  paymentLoading,
  paymentSuccess,
  paymentFinish,
  paymentError,
  createOrder,
  captureOrder,
  paymentClear
} = paymentSlice.actions

export default paymentSlice.reducer