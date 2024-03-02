import { useState } from 'react'

import BillCard from 'components/extended/BillCard'
import RoomMap from 'views/booking/RoomMap'


const BookTicket = () => {
  const [total, setTotal] = useState(0)
  const [price, setPrice] = useState(0)
  return (
    <section className="flex max-w-7xl h-auto mx-auto py-8 gap-4">
      <RoomMap price={price} setPrice={setPrice} />
      <BillCard price={price} total={total} setTotal={setTotal} />
    </section>
  )
}

export default BookTicket