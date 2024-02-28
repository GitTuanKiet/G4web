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
      toast.success('Vui lòng kiểm tra email xác nhận.')
      setTimeout(() => {
        window.location.href = '/auth/login'
      }, 5000)
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.error(error.response.data?.message)
    }
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
      window.location.href = '/'
    }
  } catch (error) {
    toast.error(error.response.data?.message)
    console.log('🚀 ~ function*handleAuthLogin ~ error:', error)
  }
}

export { handleAuthRegister, handleAuthLogin }
