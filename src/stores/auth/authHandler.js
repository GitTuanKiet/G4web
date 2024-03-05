import { call, put } from 'redux-saga/effects'
import AuthApi from 'apis/authApi'
import UserApi from 'apis/userApi'
import { saveToken } from 'utils/auth'
import { toast } from 'react-toastify'

import { setUser } from './authSlice'

function* handleAuthRegister(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.register, payload)
    if (res.status === 201) {
      saveToken(res.data.token)
      toast.success(res.data.message)
      setTimeout(() => {
        window.location.href = '/auth/login'
      }, 5000)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleAuthLogin(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.login, payload)
    if (res.status === 200) {
      saveToken(res.data.token, res.data.refreshToken)
      toast.success('Welcome back!')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleRefreshToken(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.refreshToken, payload)
    if (res.status === 200) {
      saveToken(res.data.token)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleForgotPassword(action) {
  const { payload } = action

  try {
    const res = yield call(AuthApi.forgotPassword, payload)
    if (res.status === 200) {
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

export { handleAuthRegister, handleAuthLogin, handleRefreshToken, handleForgotPassword }

function* handleUpdateProfile(action) {
  const { payload } = action
  try {
    const res = yield call(UserApi.updateProfile, payload)
    if (res.status === 200) {
      saveToken(res.data.token)
      toast.success('Profile updated')
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleChangePassword(action) {
  const { payload } = action
  try {
    if (payload.confirmPassword) delete payload.confirmPassword
    const res = yield call(UserApi.changePassword, payload)
    if (res.status === 200) {
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleSetupPIN(action) {
  const { payload } = action
  try {
    if (payload.confirmPIN) delete payload.confirmPIN
    const res = yield call(UserApi.setupPIN, payload)
    if (res.status === 200) {
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleUploadAvatar(action) {
  const { payload } = action
  try {
    const formData = new FormData()
    formData.append('avatar', payload)
    const res = yield call(UserApi.uploadAvatar, formData)
    if (res.status === 200) {
      saveToken(res.data.token)
      toast.success('Avatar updated')
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleGetHistory() {
  try {
    const res = yield call(UserApi.getHistory)
    if (res.status === 200) {
      yield put(setUser({ history: res.data }))
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

function* handleGetCards() {
  try {
    const res = yield call(UserApi.getCards)
    if (res.status === 200) {
      yield put(setUser({ cards: res.data }))
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

export { handleUpdateProfile, handleChangePassword, handleSetupPIN, handleUploadAvatar, handleGetHistory, handleGetCards }
