import { takeLatest } from 'redux-saga/effects'
import { authLogin, authRegister, authRefreshToken, authForgotPassword, userUpdateProfile, userChangePassword } from './authSlice'
import { handleAuthLogin, handleAuthRegister, handleRefreshToken, handleForgotPassword, handleUpdateProfile, handleChangePassword } from './authHandler'

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister)
  yield takeLatest(authLogin.type, handleAuthLogin)
  yield takeLatest(authRefreshToken.type, handleRefreshToken)
  yield takeLatest(authForgotPassword.type, handleForgotPassword)
  yield takeLatest(userUpdateProfile.type, handleUpdateProfile)
  yield takeLatest(userChangePassword.type, handleChangePassword)
}
