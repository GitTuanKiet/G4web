import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Line from 'components/Bill/Line'
import Divider from 'components/Divider'
import ModalListVoucher from './ModalList'

import { format } from 'date-fns'
import { padStart } from 'utils/helper'
import { removeDiscount } from 'stores/booking/slice'

const Content = () => {
  const dispatch = useDispatch()
  const { cinemas } = useSelector((state) => state.data)
  const { data, step } = useSelector((state) => state.booking)
  const { method } = useSelector((state) => state.payment)
  const [showModalVoucher, setShowModalVoucher] = useState(false)
  const [showModalGift, setShowModalGift] = useState(false)

  useEffect(() => {
    if (showModalVoucher) setShowModalGift(false)
    if (showModalGift) setShowModalVoucher(false)
  }, [showModalVoucher, showModalGift])

  const { chairs, combo, voucher, gift, showtime, chairsPrice, comboPrice } = data
  const cinema = cinemas.find((item) => item._id === showtime?.cinemaId)

  const isBooking = step < 4
  const type = cinema?.type
  const { day, start } = showtime || {}

  return (
    <div>
      {day && <Line keyName='Ngày chiếu' value={format(new Date(day), 'dd/MM/yyyy')} />}
      {start && <Line keyName= 'Suất chiếu' value={padStart(start)} />}
      {type && <Line keyName='Loại vé' value={type} />}
      {chairs.length > 0 && <Line keyName='Ghế' value={chairs.join(', ')} />}
      {combo.length > 0 && <Line keyName='Combo' value={combo.map((i) => `${i.name} x${i.quantity}`).join(', ')} />}
      {method && <Line keyName='Phương thức thanh toán' value={method} />}
      {chairsPrice > 0 &&
        <div className='flex justify-between'>
          {voucher ?
            <>
              <span className="font-medium">Mã giảm giá:</span>
              <span>{voucher?.code} {isBooking ? <Button small className="min-w-1 ml-1"
                onClick={() => dispatch(removeDiscount({ discount: 'voucher' }))}>x</Button> : null}
              </span>
            </> :
            isBooking ?<><span className="font-medium">Thêm mã giảm giá:</span> <Button small onClick={() => setShowModalVoucher(!showModalVoucher)}>+</Button></>: null}
        </div>}
      {comboPrice > 0 &&
        <div className='flex justify-between'>
          {gift ?
            <>
              <span className="font-medium">Mã quà tặng:</span>
              <span>{gift?.name} {isBooking ?
                <Button small className="min-w-1 ml-1" onClick={() => dispatch(removeDiscount({ discount: 'gift' }))}>x</Button> : null}
              </span>
            </> :
            isBooking ?<><span className="font-medium">Thêm mã quà tặng:</span> <Button small onClick={() => setShowModalGift(!showModalGift)}>+</Button></>: null}
        </div>}
      {day && <Divider />}
      {showModalVoucher && <ModalListVoucher setShowModal={setShowModalVoucher} voucher />}
      {showModalGift && <ModalListVoucher setShowModal={setShowModalGift} gift />}
    </div>
  )
}

export default Content