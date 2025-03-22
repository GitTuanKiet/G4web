import { call, put, select } from 'redux-saga/effects'
import AdminApi from 'apis/adminApi'
import {
  adminLoading,
  adminSuccess,
  adminFinish,
  adminError
} from './slice'

import { toast } from 'react-toastify'

function* handleCreateMovie(action) {
  const { payload } = action
  // payload.genres = payload.genres.split(',')
  // payload.actors = payload.actors.split(',')
  // payload.directors = payload.directors.split(',')
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.createMovie, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleUpdateMovie(action) {
  const { payload } = action
  // if (payload.genres) payload.genres = payload.genres.split(',')
  // if (payload.actors) payload.actors = payload.actors.split(',')
  // if (payload.directors) payload.directors = payload.directors.split(',')
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.updateMovie, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleDeleteMovie(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.deleteMovie, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleCreateManyShowtime(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.createManyShowtime, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleUpdateShowtime(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.updateShowtime, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleDeleteShowtime(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.deleteShowtime, payload)
    if (res.status === 200) {
      yield put(adminSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

function* handleOrderReport() {
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(adminLoading())
    const adminApi = new AdminApi(accessToken)
    const res = yield call(adminApi.reportOrders)
    if (res.status === 200) {
      yield put(adminSuccess())
      return res.totalPriceByMonth
    }
  } catch (error) {
    yield put(adminError(error.response.data?.message))
  } finally {
    yield put(adminFinish())
  }
}

export {
  handleCreateMovie,
  handleUpdateMovie,
  handleDeleteMovie,
  handleCreateManyShowtime,
  handleUpdateShowtime,
  handleDeleteShowtime,
  handleOrderReport
}