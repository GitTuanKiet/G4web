import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { userClear } from 'stores/user/slice'
import { dataClear } from 'stores/data/slice'
import { authClear } from 'stores/auth/slice'
import { bookingClear, errorClear } from 'stores/booking/slice'
import { paymentClear } from 'stores/payment/slice'

const ErrorHandle = () => {
  const dispatch = useDispatch()
  const userError = useSelector((state) => state.user.error)
  const dataError = useSelector((state) => state.data.error)
  const authError = useSelector((state) => state.auth.error)
  const bookingError = useSelector((state) => state.booking.error)
  const paymentError = useSelector((state) => state.payment.error)

  useEffect(() => {
    if (userError) {
      toast.error(userError)
      dispatch(userClear())
    }
    if (dataError) {
      toast.error(dataError)
      dispatch(dataClear())
    }
    if (authError) {
      toast.error(authError)
      dispatch(authClear())
    }
    if (bookingError) {
      toast.error(bookingError)
      // dispatch(bookingClear())
      dispatch(errorClear())
    }
    if (paymentError) {
      toast.error(paymentError)
      dispatch(paymentClear())
    }
  }, [userError, dataError, authError, bookingError, paymentError, dispatch])

  return
}

export default ErrorHandle