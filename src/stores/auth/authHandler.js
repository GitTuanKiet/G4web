import { call } from 'redux-saga/effects'
import AuthService from 'services/auth.service'
import { saveToken } from 'utils/auth'
function* handleAuthRegister(action) {
  const { payload } = action
  try {
    const res = yield call(AuthService.register, payload)
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
    const res = yield call(AuthService.login, payload)
    console.log('🚀 ~ function*handleAuthLogin ~ res:', res)
    if (res.status === 200) {
      saveToken(res.data.token)
    }
  } catch (error) {
    console.log('🚀 ~ function*handleAuthLogin ~ error:', error)
  }
}

export { handleAuthRegister, handleAuthLogin }
