import { call, all, put } from 'redux-saga/effects'
import FetchApi from 'apis/fetchApi'
import { fetchDataFailed, fetchDataSuccess, fetchingData, fetchFinish } from './slice'

function* handleFetchData() {
  try {
    yield put(fetchingData())
    const [resCinemas, resShowtimes, resMovies] = yield all([
      call(FetchApi.getCinemas),
      call(FetchApi.getShowtimes),
      call(FetchApi.getMovies)
    ])

    yield put(fetchDataSuccess({
      cinemas: resCinemas.data,
      showtimes: resShowtimes.data,
      movies: resMovies.data
    }))
  } catch (error) {
    yield put(fetchDataFailed(error.response.data?.message))
  } finally {
    yield put(fetchFinish())
  }
}

export {
  handleFetchData
}