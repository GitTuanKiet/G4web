import { useState } from 'react'
import { useSelector } from 'react-redux'

import Button from 'components/Button'
import ListTicket from './TicketList'

const CinemaTicketOverview = () => {
  const { cards } = useSelector((state) => state.user)
  const [watched, setWatched] = useState(false)

  const tickets = cards?.tickets || []
  const ticketsUsed = tickets.filter((item) => item.status === 'used')
  const ticketsNotUsed = tickets.filter((item) => item.status === 'active')
  return (
    <section className="w-full py-10">
      <div>
        <h1 className="text-2xl pb-2 border-b border-black pl-6">Vé của tôi</h1>
        <div className="flex gap-10 my-10 max-w-[900px] mx-auto w-full max-md:px-5">
          <Button onClick={() => setWatched(false)} primary={!watched}>
            Vé chưa xem
          </Button>
          <Button onClick={() => setWatched(true)} primary={watched}>
            Vé đã xem
          </Button>
        </div>
      </div>

      {watched && <ListTicket tickets={ticketsUsed} watched={watched} />}
      {!watched && <ListTicket tickets={ticketsNotUsed} watched={watched} />}
    </section>
  )
}

export default CinemaTicketOverview