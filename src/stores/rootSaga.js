import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/saga'
import userSaga from './user/saga'
import bookingSaga from './booking/saga'
import dataSaga from './data/saga'
import paymentSaga from './payment/saga'

export default function* rootSaga() {
  yield all([fork(authSaga)])
  yield all([fork(userSaga)])
  yield all([fork(bookingSaga)])
  yield all([fork(dataSaga)])
  yield all([fork(paymentSaga)])
}
