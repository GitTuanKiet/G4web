import { select, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { padStart } from 'utils/helper'
import { format } from 'date-fns'

import { setStep, clearState, setData } from './slice'
import {
  bookingLoading,
  bookingFinish,
  bookingError
} from './slice'

import { setPayment, setName, setDescription, createOrder, clearPayment } from 'stores/payment/slice'
import { fetchData } from 'stores/data/slice'

function* handleInitOrder(action) {
  const { navigate, order, data, price } = action.payload
  const { accessToken } = yield select((state) => state.auth)
  // check login
  if (!accessToken) {
    toast.info('Vui lòng đăng nhập để tiếp tục')
    navigate('/auth/login')
    return
  }
  // clear state
  yield put(clearState())
  yield put(clearPayment())
  yield put(bookingLoading())

  if (['ticket', 'voucher', 'gift'].includes(order)) {
    // set payment order
    yield put(setPayment({ order }))
    if (price) yield put(setPayment({ price }))
    // set name order
    yield put(setName({ order }))
    // set data booking
    yield put(setData(data))
    // set step
    yield put(setStep(0))
    // navigate
    navigate(`/booking/${order}`)
  }
  yield put(bookingFinish())
}

function* handleBookShowtime(action) {
  const { cinema, showtime } = action.payload
  try {
    if (!cinema) throw new Error('Đã xảy ra lỗi, vui lòng thử lại')
    if (!showtime) throw new Error('Vui lòng chọn suất chiếu')

    yield put(setPayment({ showtimeId: showtime._id }))
    yield put(setData({ cinema, showtime }))
    yield put(setDescription(`${cinema.name} - ${padStart(showtime.start)} ${format(new Date(showtime.day), 'dd/MM/yyyy')}`))
  } catch (error) {
    yield put(bookingError(error.message))
  } finally {
    yield put(bookingFinish())
  }
}

function* handleBookChairs(action) {
  const { chairs, price } = action.payload
  try {
    yield put(bookingLoading())
    if (chairs.length > 4) throw new Error('Chọn quá nhiều ghế rồi bạn ơi')
    else yield put(setData({ chairs, chairsPrice: price }))
  } catch (error) {
    yield put(bookingError(error.message))
  } finally {
    yield put(bookingFinish())
  }
}

function* handleBookCombo(action) {
  const { combo, price } = action.payload
  try {
    yield put(bookingLoading())

    yield put(setData({ combo, comboPrice: price }))
  } catch (error) {
    yield put(bookingError(error.message))
  } finally {
    yield put(bookingFinish())
  }
}

function* handleStepBookingTicket(action) {
  const { nextStep, navigate } = action.payload
  const { data } = yield select((state) => state.booking)
  const { method, payment } = yield select((state) => state.payment)
  try {
    yield put(bookingLoading())
    yield put(fetchData())
    if (nextStep === -1) {
      toast.info('Hủy đặt vé thành công')
      yield put(clearState())
      navigate(-1)
    }

    if (nextStep === 0) {
      if (!data?.movie) {
        navigate(-1)
        return
      }
    }

    if (nextStep === 1) {
      if (!data?.showtime && !data?.cinema) {
        throw new Error('Chưa chọn suất chiếu')
      }
      if (!payment?.showtimeId) yield put(setPayment({ showtimeId: data?.showtime?._id }))
    }

    if (nextStep === 2) {
      if (data?.chairs.length === 0) {
        throw new Error('Chưa chọn ghế')
      }
    }

    if (nextStep === 4) {
      if (!method) {
        throw new Error('Vui lòng chọn phương thức thanh toán')
      }
      // add description
      // yield put(setDescription(` - Ghế: ${data?.chairs.join(', ')}`))
      // yield put(setDescription(` - ${data?.combo.map((i) => `${i.name} x${i.quantity}`).join(', ')}`))
      yield put(setDescription(` - Mua vé xem phim ${data?.movie?.title}`))
      // calculate price (chair - voucher) + (combo - gift)
      const { chairsPrice, comboPrice, voucherPrice, giftPrice } = data
      const totalChair = chairsPrice - voucherPrice < 0 ? 0 : chairsPrice - voucherPrice
      const totalCombo = comboPrice - giftPrice < 0 ? 0 : comboPrice - giftPrice
      const total = totalChair + totalCombo
      yield put(setPayment({ chairs: data?.chairs, price: Number((total + total/10).toFixed(2)) }))
    }

    if (nextStep === 5) {
      if (payment.price < 0) yield put(setPayment({ price: 0 }))
      yield put(createOrder())
    }

    yield put(setStep(nextStep))
  } catch (error) {
    yield put(bookingError(error.message))
  } finally {
    yield put(bookingFinish())
  }
}

function* handleStepBookingDiscount(action) {
  const { nextStep, navigate } = action.payload
  const { data } = yield select((state) => state.booking)
  const { method, payment } = yield select((state) => state.payment)
  if (nextStep === -1) {
    toast.info('Hủy đặt vé thành công')
    yield put(clearState())
    navigate(-1)
  }

  if (nextStep === 0) {
    if (!data?.voucher && !data?.gift) {
      navigate(-1)
      return
    }
  }

  if (nextStep === 1) {
    if (!method) {
      toast.error('Vui lòng chọn phương thức thanh toán')
      return
    }

    if (payment.order === 'voucher') yield put(setPayment({ code: data?.voucher?.code }))
    yield put(setDescription(`${payment.order} - ${data?.voucher?.title || data?.gift?.title}`))
  }

  if (nextStep === 2) {
    if (payment.price <= 0) yield put(setPayment({ price: 0 }))
    yield put(createOrder())
  }

  yield put(setStep(nextStep))
}

function* handleAddDiscount(action) {
  const { gift, voucher } = action.payload
  const { data } = yield select((state) => state.booking)
  const { voucherPrice, giftPrice } = data
  try {
    yield put(bookingLoading())
    if (gift) {
      if (data?.gift || giftPrice) throw new Error('Bạn đã sử dụng mã quà tặng khác')
      yield put(setPayment({ giftOrderId: gift.orderId }))
      yield put(setData({ gift, giftPrice: gift.value }))
    }
    if (voucher) {
      if (data?.voucher || voucherPrice) throw new Error('Bạn đã sử dụng mã giảm giá khác')
      yield put(setPayment({ voucherOrderId: voucher.orderId }))
      yield put(setData({ voucher, voucherPrice: voucher.discount }))
    }
  } catch (error) {
    yield put(bookingError(error.message))
  } finally {
    yield put(bookingFinish())
  }
}

function* handleRemoveDiscount(action) {
  const { discount } = action.payload
  const { data } = yield select((state) => state.booking)
  const { voucherPrice, giftPrice } = data
  if (discount === 'gift' && data?.gift && giftPrice) {
    yield put(setPayment({ giftOrderId: null }))
    yield put(setData({ gift: null, giftPrice: null }))
  }
  if (discount === 'voucher' && data?.voucher && voucherPrice) {
    yield put(setPayment({ voucherOrderId: null }))
    yield put(setData({ voucher: null, voucherPrice: null }))
  }
}

export {
  handleInitOrder,
  handleBookShowtime,
  handleBookChairs,
  handleBookCombo,
  handleStepBookingTicket,
  handleStepBookingDiscount,
  handleAddDiscount,
  handleRemoveDiscount
}