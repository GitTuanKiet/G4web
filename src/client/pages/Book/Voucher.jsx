import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BillVoucher from './BillVoucher'
import PaymentMethodCard from 'client/views/Bill/PaymentMethod'

const Voucher = () => {
  const navigate = useNavigate()
  const { step } = useSelector((state) => state.booking)
  const { payment } = useSelector((state) => state.payment)

  useEffect(() => {
    if (!payment.order) {
      navigate('/')
    }
  }, [payment.order, navigate])

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8 mobile:flex-col">
      {step === 0 && <PaymentMethodCard />}
      <BillVoucher />
    </section>
  )
}

export default Voucher
