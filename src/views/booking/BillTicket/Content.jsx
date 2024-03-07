import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/Button'
import Line from 'components/Bill/Line'
import Divider from 'components/Divider'
import ModalListVoucher from './ModalListVoucher'

import { format } from 'date-fns'
import { setVoucher } from 'stores/booking/slice'
import { padStart } from 'utils/helper'

const Content = () => {
  const dispatch = useDispatch()
  const { cinemas } = useSelector((state) => state.data)
  const { voucher, total, showtime, chairs, combo, payment } = useSelector((state) => state.booking)
  const [showModal, setShowModal] = useState(false)

  const cinema = cinemas.find((item) => item.id === showtime?.cinemaId)

  const type = cinema?.type
  const { day, start } = showtime || {}
  const handleSetVoucher = (value) => {
    dispatch(setVoucher(value))
    setShowModal(false)
  }

  return (
    <div>
      {day && <Line keyName='Ngày chiếu' value={format(new Date(day), 'dd/MM/yyyy')} />}
      {start && <Line keyName= 'Suất chiếu' value={padStart(start)} />}
      {type && <Line keyName='Loại vé' value={type} />}
      {chairs.length > 0 && <Line keyName='Ghế' value={chairs.join(', ')} />}
      {combo.length > 0 && <Line keyName='Combo' value={combo.map((i) => `${i.name} x${i.quantity}`).join(', ')} />}
      {payment && <Line keyName='Phương thức thanh toán' value={payment} />}
      {total > 0 &&
        <div className='flex justify-between'>
          <span className="font-medium">Mã giảm giá:</span>
          {voucher ? <span>{voucher?.code}<Button small className="min-w-1 ml-1" onClick={() => dispatch(setVoucher(null))}>x</Button></span> :
            <Button small onClick={() => setShowModal(!showModal)}>+</Button>}
        </div>}
      {day && <Divider />}
      {showModal && <ModalListVoucher handleSetVoucher={handleSetVoucher} />}
    </div>
  )
}

export default Content