import { useEffect } from 'react'

import OrderApi from 'apis/orderApi'

import CinemaTicketOverview from './TicketCard'
import { toast } from 'react-toastify'

const Ticket = () => {

  useEffect(() => {
    if (window.location.search) {
      const search = new URLSearchParams(window.location.search)
      const token = search.get('token')
      const PayerID = search.get('PayerID')
      if (token) {
        if (PayerID) {
          OrderApi.checkOrder('paypal', token).then((res) => {
            if (res.status === 200) {
              toast.success(res.data.message)
            }
          }).catch((err) => {
            toast.error(err.response.data.message)
          })
        } else {
          OrderApi.cancelOrder('paypal', token).then((res) => {
            if (res.status === 200) {
              toast.info(res.data.message)
            }
          }).catch((err) => {
            toast.error(err.response.data.message)
          })
        }
      }
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  return (
    <section className="flex w-full justify-center h-auto mx-auto py-8 gap-8">
      <CinemaTicketOverview />
    </section>
  )
}

export default Ticket