import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BillTicket from 'views/booking/BillTicket'
import ComboCard from 'views/booking/Combo'
import RoomMap from 'views/booking/RoomMap'
import CinemaAdd from 'views/booking/CinemaAdd'
import PaymentMethodCard from 'components/Bill/PaymentMethod'

import { fetchData } from 'stores/data/slice'
import { useDispatch } from 'react-redux'

const BookTicket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { step } = useSelector((state) => state.booking)
  const { payment } = useSelector((state) => state.payment)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (!payment.order) {
      navigate('/')
    }
  }, [payment.order, navigate])

  return (
    <section className="flex w-7xl justify-center h-auto mx-auto py-8 gap-8">
      {step === 0 && <CinemaAdd />}
      {step === 1 && <RoomMap />}
      {step === 2 && <ComboCard />}
      {step === 3 && <PaymentMethodCard />}
      <BillTicket />
    </section>
  )
}

export default BookTicket