import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCity: [],
  listType: [],
  listCinema: [],
  listTime: [],
  listVoucher: [],
  day: null,
  cinema: null,
  type: null,
  city: null,
  chair: [],
  combo: [],
  payment: null,
  step: 0,
  total: 0,
  voucher: null,
  hour: null
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    getBooking() { },
    clearState() { return initialState },
    setListCity(state, action) { state.listCity = action.payload },
    setListType(state, action) { state.listType = action.payload },
    setListCinema(state, action) { state.listCinema = action.payload },
    setListTime(state, action) { state.listTime = action.payload },
    setListVoucher(state, action) { state.listVoucher = action.payload },
    setDay(state, action) {state.day = action.payload},
    setCinema(state, action) { state.cinema = action.payload},
    setType(state, action) {state.type = action.payload},
    setCity(state, action) {state.city = action.payload },
    setChair(state, action) { state.chair = action.payload },
    setCombo(state, action) { state.combo = action.payload },
    setPayment(state, action) { state.payment = action.payload},
    setStep(state, action) { state.step = action.payload},
    setTotal(state, action) {state.total = action.payload},
    setVoucher(state, action) { state.voucher = action.payload },
    setHour(state, action) {state.hour = action.payload}
  }
})

export const {
  getBooking,
  clearState,
  setListCity,
  setListType,
  setListCinema,
  setListTime,
  setListVoucher,
  setDay,
  setCinema,
  setType,
  setCity,
  setChair,
  setCombo,
  setPayment,
  setStep,
  setTotal,
  setVoucher,
  setHour
} = bookingSlice.actions
export default bookingSlice.reducer