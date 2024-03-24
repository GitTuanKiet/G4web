import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BillTicket from './BillTicket'
import ComboCard from './Combo'
import RoomMap from './RoomMap'
import CinemaAdd from './CinemaAdd'
import PaymentMethodCard from 'client/views/Bill/PaymentMethod'

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
    <section className="flex justify-center h-auto mx-auto py-8 gap-4  mobile:flex-col tablet:flex-col w-full">
      {step === 0 && <CinemaAdd />}
      {step === 1 && <RoomMap />}
      {step === 2 && <ComboCard />}
      {step === 3 && <PaymentMethodCard />}
      <BillTicket />
    </section>
  )
}

export default BookTicket
