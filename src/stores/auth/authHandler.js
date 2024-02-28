import { call, put } from 'redux-saga/effects'
import AuthApi from 'apis/auth.api'
import UserApi from 'apis/user.api'
import { saveToken } from 'utils/auth'
import { toast } from 'react-toastify'

function* handleAuthRegister(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.register, payload)
    if (res.status === 201) {
      toast.success(res.data.message)
      setTimeout(() => {
        window.location.href = '/auth/login'
      }, 3000)
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
    const res = yield call(UserApi.changePassword, payload)
    if (res.status === 200) {
      toast.success(res.data.message)
    }
  } catch (error) {
    toast.error(error.response.data?.message)
  }
}

export { handleUpdateProfile, handleChangePassword }
