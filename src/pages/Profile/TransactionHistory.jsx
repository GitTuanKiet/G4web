import Button from 'components/Button'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import Unit from 'components/Bill/Unit'

const OrderCard = ({ orderId, payment, name, price, createdAt, status, links }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2">
      <div>
        <p className="text-[15px]">{name}</p>
        <p className="text-[13px] text-gray-500">{createdAt}</p>
      </div>
      <div>
        {payment && <Unit value={price} />}
        <p className="text-[13px] text-gray-500">{status}</p>
      </div>
    </div>
  )
}

function TransactionHistory() {
  const navigate = useNavigate()

  const { history } = useSelector((state) => state.user)
  const [selected, setSelected] = useState('ticket')

  const handleSelected = (e) => {
    setSelected(e)
  }

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">LỊCH SỬ GIAO DỊCH</h1>

      <div className="flex gap-x-5 mt-6">
        <Button onClick={() => handleSelected('ticket')} primary={selected === 'ticket'}>
          TICKET
        </Button>
        <Button onClick={() => handleSelected('voucher')} primary={selected === 'voucher'}>
          VOUCHER
        </Button>
        <Button onClick={() => handleSelected('gift')} primary={selected === 'gift'}>
          GIFT
        </Button>
        <Button onClick={() => handleSelected('other')} primary={selected === 'other'}>
          Other
        </Button>
      </div>

      <div className="my-3">
        {history &&
          history[selected].map((item, index) => (
            <OrderCard
              key={index}
              orderId={item.orderId}
              payment={item.payment}
              name={item.name}
              price={item.price}
              createdAt={item.createdAt}
              status={item.status}
              links={item.links}
            />
          ))}
      </div>

      <button className="text-rose-500" onClick={() => navigate(-1)}>
        &lt;&lt; Quay lại
      </button>
    </div>
  )
}
export default TransactionHistory
