import { createSlice } from '@reduxjs/toolkit'

import { dates } from 'apis/mockData'

const initialState = {
  filter: {
    city: null,
    date: dates[0],
    type: null
  },
  data: {
    chairs: [],
    combo: [],
    chairsPrice: 0,
    comboPrice: 0,
    voucherPrice: 0,
    giftPrice: 0
  },
  step: -1,
  loading: false,
  error: null
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearState() { return initialState },
    setFilter: (state, action) => { state.filter = { ...state.filter, ...action.payload } },
    setData: (state, action) => { state.data = { ...state.data, ...action.payload } },
    setStep: (state, action) => { state.step = action.payload },
    addDiscount: () => { },
    removeDiscount: () => { },
    bookDiscount: () => { },
    bookTicket: () => { },
    bookShowtime: () => { },
    bookChairs: () => { },
    bookCombo: () => { },
    initOrder: () => { },
    bookingLoading: (state) => { state.loading = true },
    bookingFinish: (state) => { state.loading = false },
    bookingError: (state, action) => { state.error = action.payload, state.loading = false }
  }
})

export const {
  clearState,
  setFilter,
  setData,
  setStep,
  addDiscount,
  removeDiscount,
  bookDiscount,
  bookTicket,
  bookShowtime,
  bookChairs,
  bookCombo,
  initOrder,
  bookingLoading,
  bookingFinish,
  bookingError
} = bookingSlice.actions
export default bookingSlice.reducer