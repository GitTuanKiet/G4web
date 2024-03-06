import { takeLatest } from 'redux-saga/effects'
import {
  handleFetchData
} from './handle'
import {
  fetchData
} from './slice'

function* dataSaga() {
  yield takeLatest(fetchData.type, handleFetchData)
}

export { dataSaga }