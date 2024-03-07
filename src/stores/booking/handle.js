import { select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

function* handleCheckLogin() {
  const { isLoggedIn } = yield select((state) => state.auth)
  if (!isLoggedIn) {
    toast.info('Vui lòng đăng nhập')
    window.location.href = '/auth'
  }
}

export {
  handleCheckLogin
}