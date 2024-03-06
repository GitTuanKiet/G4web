import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import BillTicket from 'views/booking/BillTicket'
import ComboCard from 'views/booking/Combo'
import RoomMap from 'views/booking/RoomMap'
import CinemaAdd from 'views/booking/CinemaAdd'
import PaymentMethodCard from 'components/Bill/PaymentMethod'

import { getBooking, setStep, clearState } from 'stores/booking/slice'
import OrderApi from 'apis/orderApi'

const BookTicket = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { step, cinema, hour, day, type, chair, payment, total } = useSelector((state) => state.booking)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    dispatch(getBooking())
  }, [dispatch])

  const handleStep = (step) => {
    let temp = step
    if (step === -1) {
      toast.info('Hủy đặt vé thành công')
      dispatch(clearState())
      navigate(-1)
      temp = 0
    }

    // if (step === 0) {
    //   toast.info('Xin mời chọn rạp chiếu')
    // }

    if (step === 1) {
      if (!cinema || !hour || !day || !type) {
        toast.error('Vui lòng chọn rạp chiếu')
        temp -= 1
      }
    }


    if (step === 2) {
      if (chair.length === 0) {
        toast.error('Vui lòng chọn ghế')
        temp -= 1
      }
    }

    if (step === 3) {
      // if (price === 0) {
      //   toast.error('Vui lòng chọn combo')
      // }
    }

    if (step === 4) {
      if (!payment) {
        toast.error('Vui lòng chọn phương thức thanh toán')
        temp -= 1
      }
    }

    if (step === 5) {
      toast.info('Đang chuyển đến cổng thanh toán')
      dispatch(clearState())
      navigate(-1)
      return OrderApi.createOrder('paypal', {
        cinema: cinema.name,
        hour: hour.value,
        day: day.value,
        type: 'ticket',
        chair: chair.map((item) => item.id),
        price: total,
        name: cinema.name + '-' + type.name + '-' + day.value + '-' + hour.value,
        return_url: import.meta.env.VITE_RETURN_URL
      })
    }
    dispatch(setStep(temp))
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