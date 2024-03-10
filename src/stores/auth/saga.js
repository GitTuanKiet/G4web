import { takeLatest, takeEvery } from 'redux-saga/effects'
import {
  register,
  login,
  logout,
  refreshToken,
  forgotPassword,
  verifyEmail,
  resetPassword
} from './slice'
import {
  handleRegister,
  handleLogin,
  handleLogout,
  handleRefreshToken,
  handleForgotPassword,
  handleVerifyEmail,
  handleResetPassword
} from './handle'

export default function* authSaga() {
  yield takeLatest(register.type, handleRegister)
  yield takeLatest(login.type, handleLogin)
  yield takeEvery(logout.type, handleLogout)
  yield takeLatest(refreshToken.type, handleRefreshToken)
  yield takeLatest(forgotPassword.type, handleForgotPassword)
  yield takeLatest(verifyEmail.type, handleVerifyEmail)
  yield takeLatest(resetPassword.type, handleResetPassword)
}
