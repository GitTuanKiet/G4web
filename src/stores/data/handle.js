import { call, all, put } from 'redux-saga/effects'
import FetchApi from 'apis/fetchApi'
import { toast } from 'react-toastify'
import { fetchDataFailed, fetchDataSuccess, fetchingData } from './slice'

import { mockCinemas, mockShowtimes, mockMovies } from 'apis/mockData'

function* handleFetchData() {
  try {
    yield put(fetchingData())
    const [resCinemas, resShowtimes, resMovies] = yield all([
      call(FetchApi.getCinemas),
      call(FetchApi.getShowtimes),
      call(FetchApi.getMovies)
    ])

    yield put(fetchDataSuccess({
      // cinemas: resCinemas.data,
      // showtimes: resShowtimes.data,
      // movies: resMovies.data
      cinemas: mockCinemas,
      showtimes: mockShowtimes,
      movies: mockMovies
    }))
  } catch (error) {
    yield put(fetchDataFailed(error))
    toast.error('Lỗi lấy dữ liệu')
  }
}

export {
  handleFetchData
}