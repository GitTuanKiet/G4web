import { lazy } from 'react'

// project imports
import MainLayout from 'layouts/MainLayout'
import Loadable from 'components/Loadable'

// pages routing
const BookTicket = Loadable(lazy(() => import('pages/booking/Ticket')))
const BookVoucher = Loadable(lazy(() => import('pages/booking/Voucher')))
const BookGift = Loadable(lazy(() => import('pages/booking/Gift')))
const Congratulation = Loadable(lazy(() => import('pages/Congratulation')))

const PaymentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'booking/ticket',
      element: <BookTicket />
    },
    {
      path: 'booking/voucher',
      element: <BookVoucher />
    },
    {
      path: 'booking/gift',
      element: <BookGift/>
    },
    {
      path: 'payments/succeeded',
      element: <Congratulation />
    }
  ]
}

export default PaymentRoutes