import { takeLatest, takeEvery } from 'redux-saga/effects'
import {
  handleAddDiscount,
  handleRemoveDiscount,
  handleStepBookingDiscount,
  handleStepBookingTicket,
  handleBookCombo,
  handleBookChairs,
  handleBookShowtime,
  handleInitOrder
} from './handle'
import {
  addDiscount,
  removeDiscount,
  bookDiscount,
  bookTicket,
  bookCombo,
  bookChairs,
  bookShowtime,
  initOrder
} from './slice'

export default function* bookingSaga() {
  yield takeEvery(addDiscount.type, handleAddDiscount)
  yield takeEvery(removeDiscount.type, handleRemoveDiscount)
  yield takeEvery(bookDiscount.type, handleStepBookingDiscount)
  yield takeEvery(bookTicket.type, handleStepBookingTicket)
  yield takeEvery(bookCombo.type, handleBookCombo)
  yield takeEvery(bookChairs.type, handleBookChairs)
  yield takeEvery(bookShowtime.type, handleBookShowtime)
  yield takeLatest(initOrder.type, handleInitOrder)
}