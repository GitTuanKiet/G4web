import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/authSaga'
import { bookingSaga } from './booking/saga'


export default function* rootSaga() {
  yield all([fork(authSaga)])
  yield all([fork(bookingSaga)])
}
