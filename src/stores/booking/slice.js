import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    city: null,
    date: null,
    type: null
  },
  chairs: [],
  combo: [],
  payment: null,
  step: 0,
  total: 0,
  showtime: null,
  voucher: null,
  gift: null
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearState() { return initialState },
    setFilter: (state, action) => { state.filter = { ...state.filter, ...action.payload } },
    setChairs(state, action) { state.chairs = action.payload },
    setCombo(state, action) { state.combo = action.payload },
    setPayment(state, action) { state.payment = action.payload},
    setStep(state, action) { state.step = action.payload},
    setTotal(state, action) { state.total = action.payload },
    setShowtime(state, action) { state.showtime = action.payload },
    setVoucher(state, action) { state.voucher = action.payload },
    setGift(state, action) { state.gift = action.payload }
  }
})

export const {
  clearState,
  setFilter,
  setChairs,
  setCombo,
  setPayment,
  setStep,
  setTotal,
  setShowtime,
  setVoucher,
  setGift
} = bookingSlice.actions
export default bookingSlice.reducer