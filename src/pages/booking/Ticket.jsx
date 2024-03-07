import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import BillTicket from 'views/booking/BillTicket'
import ComboCard from 'views/booking/Combo'
import RoomMap from 'views/booking/RoomMap'
import CinemaAdd from 'views/booking/CinemaAdd'
import PaymentMethodCard from 'components/Bill/PaymentMethod'
import { padStart } from 'utils/helper'

import { format } from 'date-fns'
import { setStep, clearState } from 'stores/booking/slice'
import OrderApi from 'apis/orderApi'

const BookTicket = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { movies } = useSelector((state) => state.data)
  const { slug } = useParams()
  const movie = movies.find((item) => item.slug === slug)

  const { step, showtime, chairs, payment, total, voucher, gift } = useSelector((state) => state.booking)

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
      if (!showtime) {
        toast.error('Vui lòng chọn suất chiếu')
        temp -= 1
      }
    }


    if (step === 2) {
      if (chairs.length === 0) {
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
      const data = {
        showtimeId: showtime.id,
        chairs,
        ...(voucher && { voucherOrderId: voucher.orderId }),
        ...(gift && { giftOrderId: gift.orderId }),
        description: `Mua vé xem phim ${movie.title} , suất chiếu ${padStart(showtime.start)} ngày ${format(showtime.day, 'dd/MM/yyyy')}`,
        price: total*1.1,
        name: movie.title + movie.ageRestriction,
        return_url: import.meta.env.VITE_RETURN_URL
      }
      return OrderApi.createOrder(payment, data)
    }
    dispatch(setStep(temp))
  }

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8">
      {step === 0 && <CinemaAdd movie={movie} />}
      {step === 1 && <RoomMap />}
      {step === 2 && <ComboCard />}
      {step === 3 && <PaymentMethodCard />}
      <BillTicket handleStep={handleStep} />
    </section>
  )
}

export default BookTicket