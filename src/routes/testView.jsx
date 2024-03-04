
import MainLayout from 'layouts/MainLayout'
import PaymentMethod from 'views/checkout/PaymentMethod'
import RoomMap from 'views/booking/RoomMap'
import BookTicket from 'pages/booking/BookTicket'
import ComboCard from 'views/booking/Combo'

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
      path: 'combo-card',
      element: <ComboCard />
    }
  ]
}

export default testView