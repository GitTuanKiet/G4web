import { takeLatest } from 'redux-saga/effects'
import { authLogin, authRegister, authRefreshToken } from './authSlice'
import { handleAuthLogin, handleAuthRegister, handleRefreshToken } from './authHandler'

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister)
  yield takeLatest(authLogin.type, handleAuthLogin)
  yield takeLatest(authRefreshToken.type, handleRefreshToken)
}
