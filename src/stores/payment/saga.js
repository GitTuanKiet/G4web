import { takeLatest } from 'redux-saga/effects'
import {
  handleCreateOrder,
  handleCaptureOrder
} from './handle'
import {
  createOrder,
  captureOrder
} from './slice'

export default function* paymentSaga() {
  yield takeLatest(createOrder, handleCreateOrder)
  yield takeLatest(captureOrder, handleCaptureOrder)
}