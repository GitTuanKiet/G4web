import { takeLatest } from 'redux-saga/effects'
import { authLogin, authRegister } from './authSlice'
import { handleAuthLogin, handleAuthRegister } from './authHandler'

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister)
  yield takeLatest(authLogin.type, handleAuthLogin)
}
