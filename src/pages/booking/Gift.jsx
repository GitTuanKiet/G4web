
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import BillGift from 'views/booking/BillGift'
import PaymentMethodCard from 'components/Bill/PaymentMethod'

import { setStep, clearState } from 'stores/booking/slice'
import OrderApi from 'apis/orderApi'
import { CONSTANT } from 'utils/constant'

const Gift = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { step, payment, total, gift } = useSelector((state) => state.booking)

  const handleStep = (step) => {
    let temp = step
    if (step === -1) {
      toast.info('Hủy mua gift thành công')
      dispatch(clearState())
      navigate(-1)
      temp = 0
    }

    // if (step === 0) {
    //   toast.info('Xin mời chọn phương thức thanh toán')
    // }

    if (step === 1) {
      if (!payment) {
        toast.error('Vui lòng chọn phương thức thanh toán')
        temp -= 1
      }
    }

    if (step === 2) {
      toast.info('Đang chuyển đến cổng thanh toán')
      dispatch(clearState())
      navigate(-1)
      return OrderApi.createOrder(payment, {
        name: gift.title,
        price: total,
        type: 'gift',
        return_url: CONSTANT.return_url
      })
    }
    dispatch(setStep(temp))
  }

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8">
      {step === 0 && <PaymentMethodCard />}
      <BillGift handleStep={handleStep} />
    </section>
  )
}

export default Gift