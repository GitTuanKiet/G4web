import { call, put, select } from 'redux-saga/effects'
import AuthApi from 'apis/authApi'
import { saveToken, removeToken } from 'helpers/auth'
import { toast } from 'react-toastify'
import { authLoading, authSuccess, authFinish, authVerify, authError, authClear } from './slice'

function* handleRegister(action) {
  const { data, navigate } = action.payload
  try {
    yield put(authLoading())
    const res = yield call(AuthApi.register, data)
    if (res.status === 201) {
      toast.success(res.data.message)
      navigate('/auth/login')
    }
  } catch (error) {
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

function* handleLogin(action) {
  const { data, navigate } = action.payload
  try {
    const { accessToken } = yield select((state) => state.auth)
    if (accessToken) {
      toast.info('Bạn đã đăng nhập rồi')
      navigate('/')
      return
    }
    yield put(authLoading())
    const res = yield call(AuthApi.login, data)
    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data
      saveToken(accessToken, refreshToken)
      yield put(authSuccess({ accessToken, refreshToken }))
      toast.success('Đăng nhập thành công')
      navigate('/')
    }
  } catch (error) {
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

function* handleLogout(action) {
  const { navigate } = action.payload
  try {
    yield put(authLoading())
    // gọi api logout
    removeToken()
    navigate('/')
    yield put(authClear())
    window.location.reload()
  } catch (error) {
    // yield put(authError(error.response.data?.message))
    yield put(authError('Có lỗi xảy ra'))
  } finally {
    yield put(authFinish())
  }
}

function* handleRefreshToken() {
  try {
    const { refreshToken } = yield select((state) => state.auth)
    yield put(authLoading())
    const res = yield call(AuthApi.refreshToken, refreshToken)
    if (res.status == 200) {
      const { accessToken } = res.data
      saveToken(accessToken)
      yield put(authSuccess({ accessToken }))
    }
  } catch (error) {
    removeToken()
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

function* handleForgotPassword(action) {
  const { navigate, email } = action.payload
  try {
    yield put(authLoading())
    const res = yield call(AuthApi.forgotPassword, email)
    if (res.status === 200) {
      toast.success(res.data.message)
      navigate('/auth/login')
    }
  } catch (error) {
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

function* handleVerifyEmail(action) {
  const { verifyToken, navigate } = action.payload
  try {
    yield put(authLoading())
    const res = yield call(AuthApi.verifyEmail, verifyToken)
    if (res.status === 200) {
      toast.success(res.data.message)
      yield put(authVerify())
      toast.info('Sẽ chuyển hướng về trang đăng nhập sau 5s')
      window.history.pushState({}, document.title, window.location.pathname)
      setTimeout(() => {
        navigate('/auth/login')
      }, 5000)
    }
  } catch (error) {
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

function* handleResetPassword(action) {
  const { resetToken, navigate } = action.payload
  try {
    yield put(authLoading())
    const res = yield call(AuthApi.resetPassword, resetToken)
    if (res.status === 200) {
      toast.success(res.data.message)
      yield put(authVerify())
      window.history.pushState({}, document.title, window.location.pathname)
      toast.info('Sẽ chuyển hướng về trang đăng nhập sau 5s')
      setTimeout(() => {
        navigate('/auth/login')
      }, 5000)
    }
  } catch (error) {
    yield put(authError(error.response.data?.message))
  } finally {
    yield put(authFinish())
  }
}

export {
  handleRegister,
  handleLogin,
  handleLogout,
  handleRefreshToken,
  handleForgotPassword,
  handleVerifyEmail,
  handleResetPassword
}
