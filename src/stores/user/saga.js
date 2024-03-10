import { takeLatest } from 'redux-saga/effects'
import {
  fetchHistory,
  fetchCards,
  updateProfile,
  changePassword,
  uploadAvatar,
  setupPIN
} from './slice'
import {
  handleUpdateProfile,
  handleChangePassword,
  handleUploadAvatar,
  handleSetupPIN,
  handleFetchHistory,
  handleFetchCards
} from './handle'

export default function* userSaga() {
  yield takeLatest(fetchHistory.type, handleFetchHistory)
  yield takeLatest(fetchCards.type, handleFetchCards)
  yield takeLatest(updateProfile.type, handleUpdateProfile)
  yield takeLatest(changePassword.type, handleChangePassword)
  yield takeLatest(uploadAvatar.type, handleUploadAvatar)
  yield takeLatest(setupPIN.type, handleSetupPIN)
}
