import { call } from 'redux-saga/effects'
import AuthApi from 'apis/auth.api'
import { saveToken } from 'utils/auth'
import { toast } from 'react-toastify'
function* handleAuthRegister(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.register, payload)
    console.log('🚀 ~ function*handleAuthRegister ~ res:', res)
    if (res.status === 201) {
      saveToken(res.data.token)
    }
  } catch (error) {
    console.log('🚀 ~ function*handleAuthRegister ~ error:', error)
  }
}

function* handleAuthLogin(action) {
  const { payload } = action
  try {
    const res = yield call(AuthApi.login, payload)
    console.log('🚀 ~ function*handleAuthLogin ~ res:', res)
    if (res.status === 200) {
      saveToken(res.data.token)
      window.location.href='/'

    }
  } catch (error) {
    toast.error('Thông tin tài khoản không chính xác')
    console.log('🚀 ~ function*handleAuthLogin ~ error:', error)
  }
}

export { handleAuthRegister, handleAuthLogin }
