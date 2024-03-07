import { takeLatest } from 'redux-saga/effects'
import {
  handleCheckLogin
} from './handle'
import {
  setShowtime,
  setVoucher,
  setGift
} from './slice'

function* bookingSaga() {
  yield takeLatest(setShowtime.type, handleCheckLogin)
  yield takeLatest(setVoucher.type, handleCheckLogin)
  yield takeLatest(setGift.type, handleCheckLogin)
}

export { bookingSaga }