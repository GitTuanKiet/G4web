import { takeLatest } from 'redux-saga/effects'
import {
  handleFetchData
} from './handle'
import {
  fetchData
} from './slice'

export default function* dataSaga() {
  yield takeLatest(fetchData.type, handleFetchData)
}