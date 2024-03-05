import { call, put, select } from 'redux-saga/effects'
import BookingApi from 'apis/bookingApi'
import { toast } from 'react-toastify'
import { setListCity, setListType, setListCinema, setListTime } from './slice'

function* handleGetBookingData(action) {
  const { payload } = action
  try {
    const listCity = yield call(BookingApi.getListCity)
    yield put(setListCity(listCity))

    const listType = yield call(BookingApi.getListType)
    yield put(setListType(listType))

    const listCinema = yield call(BookingApi.getListCinema)
    yield put(setListCinema(listCinema))

    const listTime = yield call(BookingApi.getListTime)
    yield put(setListTime(listTime))

  } catch (error) {
    toast.error('Lỗi lấy dữ liệu')
  }
}

export {
  handleGetBookingData
}