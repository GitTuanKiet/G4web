
import MainLayout from 'layouts/MainLayout'
import PaymentMethod from 'views/checkout/PaymentMethod'
import RoomMap from 'views/booking/RoomMap'
import Bill from 'views/checkout/BillTicket'
import BookTicket from 'pages/booking/BookTicket'
import CinemaAdd from 'views/booking/CinemaAdd'

const testView = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'booking-ticket/:slug',
      element: <BookTicket />
    },
    {
      path: 'payment-method',
      element: <PaymentMethod />
    },
    {
      path: 'room-map',
      element: <RoomMap />
    },
    {
      path: 'bill',
      element: <Bill />
    },
    {
      path: 'test',
      element: <CinemaAdd />
    }
  ]
}

export default testView