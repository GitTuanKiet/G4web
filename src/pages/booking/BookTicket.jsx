import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import BillTicket from 'views/booking/BillTicket'
import ComboCard from 'views/booking/Combo'
import RoomMap from 'views/booking/RoomMap'
import CinemaAdd from 'views/booking/CinemaAdd'
import PaymentMethodCard from 'views/checkout/PaymentMethod'

import { getBooking, setStep, clearState } from 'stores/booking/slice'

const BookTicket = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { step, cinema, hour, day, type, chair, payment } = useSelector((state) => state.booking)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    dispatch(getBooking())
  }, [dispatch])

  const handleStep = (step) => {
    if (step === -1) {
      toast.info('Hủy đặt vé thành công')
      dispatch(clearState())
      navigate(-1)
      return
    }

    if (step === 0) {
      toast.info('Xin mời chọn rạp chiếu')
    }

    if (step === 1) {
      if (!cinema || !hour || !day || !type) {
        toast.error('Vui lòng chọn rạp chiếu')
        return
      }
    }

    if (step === 2) {
      if (chair.length === 0) {
        toast.error('Vui lòng chọn ghế')
        return
      }
    }

    if (step === 3) {
      // if (price === 0) {
      //   toast.error('Vui lòng chọn combo')
      //   return
      // }
    }

    if (step === 4) {
      if (payment === '') {
        toast.error('Vui lòng chọn phương thức thanh toán')
        return
      }
    }

    if (step === 5) {
      toast.success('Xác nhận đặt vé thành công')
      dispatch(clearState())
      navigate(-1)
      // call api to book ticket
      return
    }
    dispatch(setStep(step))
  }

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8">
      {step === 0 && <CinemaAdd />}
      {step === 1 && <RoomMap price={price} setPrice={setPrice} />}
      {step === 2 && <ComboCard price={price} setPrice={setPrice} />}
      {step === 3 && <PaymentMethodCard />}
      <BillTicket price={price} handleStep={handleStep} />
    </section>
  )
}

export default BookTicket