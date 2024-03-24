import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { bookTicket } from 'stores/booking/slice'

import Content from './Content'
import Divider from 'components/Divider'
import Line from 'client/views/Bill/Line'
import Unit from 'client/views/Bill/Unit'
import GroupButton from 'client/views/Bill/GroupButton'
import Info from 'client/views/Bill/Info'
import Logo from 'components/icons/Logo'

const BillTicket = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, step } = useSelector((state) => state.booking)
  const { payment } = useSelector((state) => state.payment)

  const { cinema, movie } = data
  const { price } = payment

  const { poster, title } = movie || { poster: '', title: '' }
  const { voucherPrice, giftPrice, chairsPrice, comboPrice } = data

  const dataPrice = [
    {
      key: 'Giá vé',
      value: Unit({ value: chairsPrice })
    },
    {
      key: 'Mã giảm giá',
      value: Unit({ value: voucherPrice })
    },
    {
      key: 'Combo',
      value: Unit({ value: comboPrice })
    },
    {
      key: 'Mã quà tặng',
      value: Unit({ value: giftPrice })
    }
  ]

  const handleStep = (step) => {
    dispatch(bookTicket({ nextStep: step, navigate }))
  }

  return (
    <div className="min-w-80 ">
      <div className="rounded-xl h-auto w-full bg-rose-100 p-4 text-[15px] ">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className="w-16">
            <Logo />
          </div>
          <p className="font-sans text-xl">{cinema?.name || ''}</p>
        </div>
        <Divider />
        {/* Info */}
        <Info
          image={poster}
          title={title}
          other={movie ? [movie.language, movie.duration, movie.ageRestriction] : []}
          ticket
        />
        {/* Content */}
        <Content />
        {/* Total */}

        <div>
          {dataPrice.map((item, index) => (
            <Line key={index} keyName={item.key} value={item.value} />
          ))}
        </div>
        <Divider />
        {step >= 4 ? (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-medium">{'Tổng cộng'}:</span>
              <span className="text-gray-500">{Unit({ value: price })}</span>
            </div>
            <span className="text-xs text-right text-blue-400">Đã bao gồm VAT(10%)</span>
          </div>
        ) : null}
        {/* group button */}
        <GroupButton handleStep={handleStep} start={0} end={4} />
      </div>
    </div>
  )
}
export default BillTicket
