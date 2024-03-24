import { call, put, select } from 'redux-saga/effects'
import UserApi from 'apis/userApi'
import {
  userLoading,
  userSuccess,
  userFinish,
  userError,
  setCards,
  setHistory,
  setMemberCard
} from './slice'

import { saveToken } from 'helpers/auth'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

function* handleUpdateProfile(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(userLoading())
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.updateProfile, payload)
    if (res.status === 200) {
      saveToken(res.data.accessToken)
      yield put(userSuccess())
      toast.success('Profile updated')
    }
  } catch (error) {
    yield put(userError(error.response.data?.message))
  } finally {
    yield put(userFinish())
  }
}

function* handleChangePassword(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(userLoading())
    const userApi = new UserApi(accessToken)
    if (payload.confirmPassword) delete payload.confirmPassword
    const res = yield call(userApi.changePassword, payload)
    if (res.status === 200) {
      yield put(userSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    yield put(userError(error.response.data?.message))
  } finally {
    yield put(userFinish())
  }
}

function* handleSetupPIN(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    if (payload.confirmPIN) delete payload.confirmPIN
    yield put(userLoading())
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.setupPIN, payload)
    if (res.status === 200) {
      toast.success(res.data.message)
      yield put(userSuccess())
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleUploadAvatar(action) {
  const { payload } = action
  try {
    const { accessToken } = yield select((state) => state.auth)
    yield put(userLoading())
    const userApi = new UserApi(accessToken)
    const formData = new FormData()
    formData.append('avatar', payload)
    const res = yield call(userApi.uploadAvatar, formData)
    if (res.status === 200) {
      saveToken(res.data.accessToken)
      yield put(userSuccess())
      toast.success('Avatar updated')
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

function* handleFetchHistory() {
  try {
    yield put(userLoading())
    const { accessToken } = yield select((state) => state.auth)
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.getHistory)
    if (res.status === 200) {
      yield put(setHistory(res.data))
      yield put(userSuccess())
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

function* handleFetchCards() {
  try {
    yield put(userLoading())
    const { accessToken } = yield select((state) => state.auth)
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.getCards)
    if (res.status === 200) {
      yield put(setCards(res.data))
      yield put(userSuccess())
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

function* handleGetMemberCard() {
  try {
    yield put(userLoading())
    const { accessToken } = yield select((state) => state.auth)
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.getMemberCard)
    if (res.status === 200) {
      if (res.data) {
        yield put(setMemberCard(res.data))
      }
      yield put(userSuccess())
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

function* handleRegisterMemberCard(action) {
  const { payload } = action
  try {
    yield put(userLoading())
    const { accessToken } = yield select((state) => state.auth)
    const userApi = new UserApi(accessToken)
    const newPayload = {
      ...payload,
      registeredDate: format(new Date(), 'yyyy-MM-dd')
    }
    const res = yield call(userApi.registerMemberCard, newPayload)
    if (res.status === 200) {
      yield put(userSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

function* handleLostMemberCard() {
  try {
    yield put(userLoading())
    const { accessToken } = yield select((state) => state.auth)
    const userApi = new UserApi(accessToken)
    const res = yield call(userApi.lostMemberCard)
    if (res.status === 200) {
      yield put(userSuccess())
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  } finally {
    yield put(userFinish())
  }
}

export {
  handleUpdateProfile,
  handleChangePassword,
  handleSetupPIN,
  handleUploadAvatar,
  handleFetchHistory,
  handleFetchCards,
  handleGetMemberCard,
  handleRegisterMemberCard,
  handleLostMemberCard
}
