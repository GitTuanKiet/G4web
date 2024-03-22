import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'
import ListTicket from './ListTicket'
import { useSelector } from 'react-redux'

const CinemaTicketOverview = () => {
  const navigate = useNavigate()
  const { cards } = useSelector((state) => state.user)
  const { accessToken } = useSelector((state) => state.auth)
  const [watched, setWatched] = useState(false)

  useEffect(() => {
    if (!accessToken) {
      navigate('/auth')
    }
  }, [accessToken, navigate])

  const ticket = cards?.tickets || []
  const ticketUsed = ticket.filter((item) => item.status === 'used')
  const ticketNotUsed = ticket.filter((item) => item.status === 'active')
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

      {watched && <ListTicket tickets={ticketUsed} watched={watched} />}
      {!watched && <ListTicket tickets={ticketNotUsed} watched={watched} />}
    </section>
  )
}

export default CinemaTicketOverview