
import MainLayout from 'layouts/MainLayout'
import PaymentMethod from 'views/checkout/PaymentMethod'
import RoomMap from 'views/booking/RoomMap'
import Bill from 'views/checkout/Bill'
import BookTicket from 'pages/booking/BookTicket'

const testView = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'test',
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
    }
  ]
}

export default testView