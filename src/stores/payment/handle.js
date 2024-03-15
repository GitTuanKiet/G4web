import { call, select, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import PaymentApi from 'apis/paymentApi'

import {
  paymentLoading,
  paymentSuccess,
  paymentError,
  paymentFinish
} from './slice'
import { refreshToken } from 'stores/auth/slice'

function* handleCreateOrder() {
  const { accessToken } = yield select((state) => state.auth)
  const { method, payment } = yield select((state) => state.payment)
  try {
    yield put(paymentLoading())
    // khởi tạo đối tượng paymentApi và gọi phương thức createOrder
    const paymentApi = new PaymentApi(accessToken)
    const res = yield call(paymentApi.createOrder, method, { ...payment })

    // lấy link từ res.data.link
    const link = res.data.link
    if (link) {
      toast.success('Đang chuyển hướng đến trang thanh toán')
      yield put(paymentSuccess())
      setTimeout(() => {
        window.location.href = link
      }, 2000)
    }
  } catch (error) {
    yield put(paymentError(error.response.data.message))
  } finally {
    yield put(paymentFinish())
  }
}

function* handleCaptureOrder(action) {
  const { token, PayerID, navigate } = action.payload
  const { accessToken } = yield select((state) => state.auth)
  try {
    yield put(paymentLoading())
    const paymentApi = new PaymentApi(accessToken)
    if (token) {
      // trường hợp có param PayerID thì là đã thanh toán
      if (PayerID) {
        const res = yield call(paymentApi.checkOrder, token)
        if (res.status === 200) {
          toast.success(res.data.message)
        }
        // trường hợp không có param PayerID thì là hủy thanh toán
      } else {
        const res = yield call(paymentApi.cancelOrder, token)
        if (res.status === 200) {
          toast.info(res.data.message)
        }
      }
      yield put(paymentSuccess())
      // xóa param trên url
      window.history.pushState({}, document.title, window.location.pathname)
    }
    yield put(refreshToken())
    toast.info('Đang chuyển hướng về trang chủ')
    setTimeout(() => {
      navigate('/')
    }, 2000)
  } catch (error) {
    yield put(paymentError(error.response.data.message))
  } finally {
    yield put(paymentFinish())
  }
}

export {
  handleCreateOrder,
  handleCaptureOrder
}