import { takeLatest } from 'redux-saga/effects'
import {
  createMovie,
  updateMovie,
  deleteMovie,
  createManyShowtime,
  updateShowtime,
  deleteShowtime,
  orderReport
} from './slice'
import {
  handleCreateMovie,
  handleUpdateMovie,
  handleDeleteMovie,
  handleCreateManyShowtime,
  handleUpdateShowtime,
  handleDeleteShowtime,
  handleOrderReport
} from './handle'

export default function* userSaga() {
  yield takeLatest(createMovie.type, handleCreateMovie)
  yield takeLatest(updateMovie.type, handleUpdateMovie)
  yield takeLatest(deleteMovie.type, handleDeleteMovie)
  yield takeLatest(createManyShowtime.type, handleCreateManyShowtime)
  yield takeLatest(updateShowtime.type, handleUpdateShowtime)
  yield takeLatest(deleteShowtime.type, handleDeleteShowtime)
  yield takeLatest(orderReport.type, handleOrderReport)
}
