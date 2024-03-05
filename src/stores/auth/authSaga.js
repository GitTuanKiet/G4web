import { takeLatest } from 'redux-saga/effects'
import {
  authLogin,
  authRegister,
  authRefreshToken,
  authForgotPassword,
  userUpdateProfile,
  userChangePassword,
  userUploadAvatar,
  userSetupPIN,
  userHistory,
  userCards
} from './authSlice'
import {
  handleAuthLogin,
  handleAuthRegister,
  handleRefreshToken,
  handleForgotPassword,
  handleUpdateProfile,
  handleChangePassword,
  handleUploadAvatar,
  handleSetupPIN,
  handleGetHistory,
  handleGetCards
} from './authHandler'

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister)
  yield takeLatest(authLogin.type, handleAuthLogin)
  yield takeLatest(authRefreshToken.type, handleRefreshToken)
  yield takeLatest(authForgotPassword.type, handleForgotPassword)
  yield takeLatest(userUpdateProfile.type, handleUpdateProfile)
  yield takeLatest(userChangePassword.type, handleChangePassword)
  yield takeLatest(userUploadAvatar.type, handleUploadAvatar)
  yield takeLatest(userSetupPIN.type, handleSetupPIN)
  yield takeLatest(userHistory.type, handleGetHistory)
  yield takeLatest(userCards.type, handleGetCards)
}
