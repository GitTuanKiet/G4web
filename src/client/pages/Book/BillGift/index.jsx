import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Divider from 'shared/components/Divider'
import Line from 'client/views/Bill/Line'
import Unit from 'client/views/Bill/Unit'
import GroupButton from 'client/views/Bill/GroupButton'
import Logo from 'shared/components/icons/Logo'
import { bookDiscount } from 'stores/booking/slice'

const BillGift = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector((state) => state.booking)

  const { title, img_url } = data.gift || {}
  const { method, payment } = useSelector((state) => state.payment)

  const dataTotal = [
    {
      key: 'Tổng',
      value: Unit({ value: payment.price })
    }
  ]

  const handleStep = (step) => {
    dispatch(bookDiscount({ nextStep: step, navigate }))
  }

  return (
    <div className='min-w-80'>
      <div className="rounded-xl h-auto w-full bg-rose-100 p-4 text-[15px]">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className='w-16'>
            <Logo />
          </div>
          <p className="font-sans text-xl">{title || ''}</p>
        </div>
        <Divider />
        {/* Info */}
        <img src={img_url} alt={title} className="rounded-xl aspect-auto mx-auto" />
        <Divider />
        {/* Content */}
        <div>
          <Line keyName='Giá trị' value={Unit({ value: payment.price })} />
          {method && <Line keyName='Phương thức thanh toán' value={method} />}
        </div>
        <Divider />
        {/* Total */}
        <div>
          {dataTotal.map((item, index) => (
            <Line key={index} keyName={item.key} value={item.value} />
          ))}
        </div>
        <Divider />
        {/* group button */}
        <GroupButton handleStep={handleStep} start={0} end={1} />
      </div>
    </div>
  )
}
export default BillGift
