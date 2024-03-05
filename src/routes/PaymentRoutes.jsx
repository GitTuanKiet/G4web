import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// pages routing
const BookTicket = Loadable(lazy(() => import('pages/booking/Ticket')))
const BookVoucher = Loadable(lazy(() => import('pages/booking/Voucher')))
const BookGift = Loadable(lazy(() => import('pages/booking/Gift')))
const Ticket = Loadable(lazy(() => import('pages/Ticket')))

const PaymentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'booking-ticket/:slug',
      element: <BookTicket />
    },
    {
      path: 'booking-voucher/:code',
      element: <BookVoucher />
    },
    {
      path: 'booking-gift/:id/:slug',
      element: <BookGift/>
    },
    {
      path: 'ticket',
      element: <Ticket />
    },
    {
      path: 'ticket/return',
      element: <Ticket />
    }
  ]
}

export default PaymentRoutes