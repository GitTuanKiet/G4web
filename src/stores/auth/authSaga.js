import { takeLatest } from 'redux-saga/effects'
import { authLogin, authRegister, authRefreshToken, authForgotPassword } from './authSlice'
import { handleAuthLogin, handleAuthRegister, handleRefreshToken, handleForgotPassword } from './authHandler'

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister)
  yield takeLatest(authLogin.type, handleAuthLogin)
  yield takeLatest(authRefreshToken.type, handleRefreshToken)
  yield takeLatest(authForgotPassword.type, handleForgotPassword)
}
