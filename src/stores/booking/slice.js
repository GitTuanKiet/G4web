import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCity: [],
  listType: [],
  listCinema: [],
  listTime: [],
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
  gift: null,
  hour: null,
  showtime: null
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
    setGift(state, action) { state.gift = action.payload },
    setHour(state, action) { state.hour = action.payload },
    setShowtime(state, action) { state.showtime = action.payload }
  }
})

export const {
  getBooking,
  clearState,
  setListCity,
  setListType,
  setListCinema,
  setListTime,
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
  setGift,
  setHour,
  setShowtime
} = bookingSlice.actions
export default bookingSlice.reducer