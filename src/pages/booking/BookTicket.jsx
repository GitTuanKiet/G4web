import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import BillCard from 'components/extended/BillCard'
import RoomMap from 'views/booking/RoomMap'
import CinemaAdd from 'views/booking/CinemaAdd'
import PaymentMethodCard from 'views/checkout/PaymentMethod'


const BookTicket = () => {
  const navigate = useNavigate()
  const [selectedChairs, setSelectedChairs] = useState([])
  const [total, setTotal] = useState(0)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [price, setPrice] = useState(0)
  const [data, setData] = useState({})
  const [step, setStep] = useState(1)

  const handleStep = (step) => {
    if (step === 0) {
      toast.info('Hủy đặt vé thành công')
      navigate(-1)
      return
    }

    if (step === 1) {
      if (!data?.cinema) {
        setSelectedChairs([])
        setTotal(0)
        setSelectedPayment('')
        setPrice(0)
      }
    }

    if (step === 2) {
      if (!data?.cinema || !data?.time || !data?.day || !data?.type) {
        toast.error('Vui lòng chọn đủ thông tin')
        setStep(1)
        return
      }
    }

    if (step === 3) {
      if (selectedChairs.length === 0) {
        toast.error('Vui lòng chọn ghế')
        setStep(2)
        return
      }
    }

    if (step === 4) {
      if (selectedPayment === '') {
        toast.error('Vui lòng chọn phương thức thanh toán')
        setStep(3)
        return
      }
    }

    if (step === 5) {
      toast.success('Xác nhận đặt vé thành công')
      navigate(-1)
      // call api to book ticket
      return
    }
    setStep(step)
  }

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8">
      {step === 1 && <CinemaAdd data={data} setData={setData} />}
      {step === 2 && <RoomMap price={price} setPrice={setPrice} selectedChairs={selectedChairs} setSelectedChairs={setSelectedChairs} />}
      {step === 3 && <PaymentMethodCard selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />}
      <BillCard price={price} total={total} setTotal={setTotal} data={data} chair={selectedChairs} payment={selectedPayment} step={step} setStep={handleStep} />
    </section>
  )
}

export default BookTicket